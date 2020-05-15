'use strict';

var response = require('./res');
var connection = require('./koneksi');
var md5 = require('MD5');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan yeee..",res)
};

//menampilkan semua data sparepart
exports.tampilsparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart',function(error,rows, fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows,res)
        }
        
    });
};

//menambahkan sparepart
exports.tambahsparepart = function(req,res){
    var Id_sparepart = req.body.Id_sparepart;
    var Nama_sparepart = req.body.Nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_sparepart (Id_sparepart,Nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?,?)',
    [Id_sparepart,Nama_sparepart,harga_sparepart,satuan],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil menambahkan data Sparepart",res)
            }
        });
};

//menampilkan semua data sparepart berdasarkan id
exports.tampilidspare = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
    function(error,rows, fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows,res)
        }
    });
};

//mengubah data sparepart
exports.ubahsparepart = function(req,res){
    var Id_sparepart = req.body.Id_sparepart;
    var Nama_sparepart = req.body.Nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('UPDATE t_sparepart SET Nama_sparepart=?, harga_sparepart=?, satuan =? WHERE Id_sparepart=?',
    [Nama_sparepart,harga_sparepart,satuan,Id_sparepart],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil Ubah Data Sparepart",res)
            }
        });
};

//menghapus data sparepart berdasarkan id
exports.hapussparepart = function(req,res){
    var Id_sparepart = req.body.Id_sparepart;
    connection.query('DELETE FROM t_sparepart WHERE Id_sparepart=?',
    [Id_sparepart],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil Hapus Data Sparepart",res)
            }
        });
};



//menampilkan semua data montir
exports.tampilmontir = function(req,res){
    connection.query('SELECT * FROM t_montir',function(error,rows, fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows,res)
        }
        
    });
};

//menampilkan semua data montir berdasarkan id
exports.tampilidmontir = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
    function(error,rows, fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows,res)
        }
    });
};

//menambahkan montir
exports.tambahmontir = function(req,res){
    var Id_montir = req.body.Id_montir;
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (Id_montir,Nama_montir,harga_perjam) VALUES(?,?,?)',
    [Id_montir,Nama_montir,harga_perjam],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil menambahkan data Montir",res)
            }
        });
};

//mengubah data montir
exports.ubahmontir = function(req,res){
    var Id_montir = req.body.Id_montir;
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;
    
    connection.query('UPDATE t_montir SET Nama_montir=?, harga_perjam=? WHERE Id_montir=?',
    [Nama_montir, harga_perjam, Id_montir],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil Ubah Data Montir",res)
            }
        });
};

//menghapus data montir berdasarkan id
exports.hapusmontir = function(req,res){
    var Id_montir = req.body.Id_montir;
    connection.query('DELETE FROM t_montir WHERE Id_montir=?',
    [Id_montir],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil Hapus Data Montir",res)
            }
        });
};



//menampilkan semua data servis
exports.tampilservis = function(req,res){
    connection.query('SELECT * FROM total_servis',function(error,rows, fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows,res)
        }
        
    });
};


//menambahkan servis
exports.tambahservis = function(req,res){
    var Id_servis = req.body.Id_servis;
    var tgl_servis = new Date();
    var Id_user = req.body.Id_user;
    var Id_montir = req.body.Id_montir;
    var Jumlah_sparepart = req.body.Jumlah_sparepart;
    var Id_sparepart = req.body.Id_sparepart;

    connection.query('INSERT INTO t_servis (Id_servis,tgl_servis,Id_user,Id_montir,Jumlah_sparepart,Id_sparepart) VALUES(?,?,?,?,?,?)',
    [Id_servis,tgl_servis,Id_user,Id_montir,Jumlah_sparepart,Id_sparepart],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil menambahkan data Servis",res)
            }
        });
};

//mengubah data servis
exports.ubahservis = function(req,res){
    var Id_servis = req.body.Id_servis;
    var tgl_servis = new Date();
    var Id_user = req.body.Id_user;
    var Id_montir = req.body.Id_montir;
    var Jumlah_sparepart = req.body.Jumlah_sparepart;
    var Id_sparepart = req.body.Id_sparepart;
    
    connection.query('UPDATE t_servis SET tgl_servis=?, Id_user=?, Id_montir=?, Jumlah_sparepart=?, Id_sparepart=? WHERE Id_servis=?',
    [tgl_servis, Id_user, Id_montir, Jumlah_sparepart, Id_sparepart, Id_servis],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil Ubah Data Servis",res)
            }
        });
};

//menghapus data servis berdasarkan id
exports.hapusservis = function(req,res){
    var Id_servis = req.body.Id_servis;
    connection.query('DELETE FROM t_servis WHERE Id_servis=?',
    [Id_servis],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil Hapus Data Servis",res)
            }
        });
};



//menampilkan semua data user
exports.tampiluser = function(req,res){
    connection.query('SELECT * FROM t_user',function(error,rows, fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows,res)
        }
        
    });
};

//menampilkan semua data user berdasarkan id
exports.tampiliduser = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_user WHERE Id_user = ?', [id],
    function(error,rows, fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows,res)
        }
    });
};

//mengubah data user
exports.ubahuser = function(req,res){
    
    var Id_user= req.body.Id_user;
    var Nama_user= req.body.Nama_user;
    var email= req.body.email;
    var password= md5(req.body.password);
    var level= req.body.level;
        
    connection.query('UPDATE t_user SET Nama_user=?, email=?, password=?, level=? WHERE Id_user=?',
    [Nama_user, email, password, level, Id_user],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil Ubah Data User",res)
            }
        });
};

//menghapus data user berdasarkan id
exports.hapususer = function(req,res){
    var Id_user = req.body.Id_user;
    connection.query('DELETE FROM t_user WHERE Id_user=?',
    [Id_user],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil Hapus Data User",res)
            }
        });
};


//menampilkan semua data level
exports.tampillevel = function(req,res){
    connection.query('SELECT * FROM t_level',function(error,rows, fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows,res)
        }
        
    });
};

//menampilkan semua data level berdasarkan id
exports.tampilidlevel = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_level WHERE Id_level = ?', [id],
    function(error,rows, fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows,res)
        }
    });
};

//menambahkan data level
exports.tambahlevel = function(req,res){
    var Id_level = req.body.Id_level;
    var Nama_level = req.body.Nama_level;
    
    connection.query('INSERT INTO t_level (Id_level, Nama_level) VALUES(?,?)',
    [Id_level,Nama_level],
    function (error,rows,fields)
    {
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil menambahkan data Level",res)
            }
        });
};

//mengubah data Level
exports.ubahlevel = function (req, res) {
    var Id_level = req.body.Id_level;
    var Nama_level = req.body.Nama_level;

    connection.query('UPDATE t_level SET Nama_level=?  WHERE Id_level=?',
     [Nama_level, Id_level],
    function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data Level", res)
            }
        });
};

exports.hapuslevel = function(req, res){
    var id = req.body.Id_level;
    connection.query('DELETE FROM t_level WHERE Id_level=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data Level", res)
        }
    });
};

