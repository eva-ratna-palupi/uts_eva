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