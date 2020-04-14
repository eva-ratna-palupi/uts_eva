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
                    response.ok("Email Sudah Terdaftar");
                }

            }
        })
};