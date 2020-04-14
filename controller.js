'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan yeee..",res)
};

//menampilakn semua data sparepart
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
    var harga = req.body.harga;

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