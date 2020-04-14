'use strict';

module.exports= function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsparepart')
        .get(jsonku.tampilsparepart);
    
    app.route('/tambahsparepart')
        .get(jsonku.tambahsparepart);
    
    app.route('/tampilmontir')
        .get(jsonku.tampilmontir);
    
    app.route('/tambahmontir')
        .post(jsonku.tambahmontir);

    app.route('/tampilservis')
        .get(jsonku.tampilservis);
    
    app.route('/tambahservis')
        .post(jsonku.tambahservis);
    
    app.route('/tampiluser')
        .get(jsonku.tampiluser);

};
