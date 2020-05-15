const jwt =  require('jsonwebtoken');
const config = require('../config/secret');

function verifikasi(){
    return function(req, rest,next){

        var level = req.body.level
        var tokenWithBearer = req.headers.authorization;

        if(tokenWithBearer){
            var token = tokenWithBearer.split(' ')[1];
                //verifikasi
                jwt.verify(token, config.secret, function(err, decoded){
                    if(err){
                        return rest.status(401).send({auth:false, mesaage:'Token tidak terdaftar!'});
                    } else {
                        if(level == 1){
                            req.auth = decoded;
                            next();
                        
                        }else {
                            return rest.status(401).send({auth:false, mesaage:'Gagal mengotorisasi role anda!'});
                        }
                    }
                });
            }
            
            else{
                return rest.status(401).send({auth:false, mesaage:'Token tidak tersedia!'});
            }
        }
    }

function verifikasi2(){
        return function(req, rest,next){
    
            var level = req.body.level
            var tokenWithBearer = req.headers.authorization;
    
            if(tokenWithBearer){
                var token = tokenWithBearer.split(' ')[1];
                    //verifikasi
                    jwt.verify(token, config.secret, function(err, decoded){
                        if(err){
                            return rest.status(401).send({auth:false, mesaage:'Token tidak terdaftar!'});
                        } else {
                            if(level == 2){
                                req.auth = decoded;
                                next();
                            
                            }else {
                                return rest.status(401).send({auth:false, mesaage:'Gagal mengotorisasi role anda!'});
                            }
                        }
                    });
                }
                
                else{
                    return rest.status(401).send({auth:false, mesaage:'Token tidak tersedia!'});
                }
            }
        }

module.exports = verifikasi;