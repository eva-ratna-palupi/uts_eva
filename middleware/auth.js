var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require ('../res');
var jwt = require('jsonwebtoken');
var config = require ('../config/secret');
var ip  = require('ip');

//controller utk register
exports.registrasi = function(req,res) {
    var post = {
        Id_user: req.body.Id_user,
        Nama_user: req.body.Nama_user,
        email: req.body.email,
        password: md5(req.body.password),
        level: req.body.level
    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["t_user", "email", post.email];

    query = mysql.format(query,table);

    connection.query(query, function(error,rows){
        if(error){
            console.log(error);
        }
        else{
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_user"];
                query= mysql.format(query,table);
                connection.query(query, post, function(error,rows){
                    if(error){
                        console.log(error);
                    }
                    else{
                        response.ok("Berhasil Menambahkan Data User Baru", res);
                    }
                });
            }
                else{
                    response.ok("Email Sudah Terdaftar",res);
                }

            }
        })
};

//controller untuk login
exports.login = function(req,res){
    var post = {
        password : req.body.password,
        email : req.body.email
    }

    var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
    var table = ["t_user", "password", md5(post.password), "email", post.email];

    query = mysql.format(query,table);
    connection.query(query, function(error,rows){
        if(error){
            console.log(error);
        }else {
            if(rows.length == 1){
                var token = jwt.sign({rows}, config.secret,{
                    expiresIn: '3h'
                });
                
                id_user = rows[0].id_user;

                var data = {
                    id_user: id_user,
                    access_token: token,
                    ip_address: ip.address()
                }

                var query = "INSERT INTO ?? SET ?";
                var table = ["akses_token"];

                query = mysql.format(query, table);
                connection.query(query, data, function(error, rows){
                    if(error){
                        console.log(error);
                    }else {
                        res.json({
                            success : true,
                            message: "Token JWT tergenerate!",
                            token: token,
                            currUser: data.id_user
                        });
                    }
                });
            }
            else {
                res.json({"Error": true, "Message": "Email: atau Password Salah"})
            }
        }
    })
}

exports.halamanrahasia = function(req,res){
    response.ok("Halaman ini hanya untuk user dengan level = ADMIN!", res);
}

exports.halamanrahasia2 = function(req,res){
    response.ok("Halaman ini hanya untuk user dengan level = PELANGGAN!", res);
}