'use strict';

module.exports= function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsparepart')
        .get(jsonku.tampilsparepart);

    app.route('/tampilsparepart/:id')
        .get(jsonku.tampilidspare);
    
    app.route('/tambahsparepart')
        .post(jsonku.tambahsparepart);

    app.route('/ubahsparepart')
        .put(jsonku.ubahsparepart);

    app.route('/hapussparepart')
        .delete(jsonku.hapussparepart);

    
        
    app.route('/tampilmontir')
        .get(jsonku.tampilmontir);

    app.route('/tampilmontir/:id')
        .get(jsonku.tampilidmontir);
    
    app.route('/tambahmontir')
        .post(jsonku.tambahmontir);
    
    app.route('/ubahmontir')
        .put(jsonku.ubahmontir);

    app.route('/hapusmontir')
        .delete(jsonku.hapusmontir);



        
    app.route('/tampilservis')
        .get(jsonku.tampilservis);
        
    app.route('/tambahservis')
        .post(jsonku.tambahservis); 

    app.route('/ubahservis')
        .put(jsonku.ubahservis);

    app.route('/hapusservis')
        .delete(jsonku.hapusservis);
    


    app.route('/tampiluser')
        .get(jsonku.tampiluser);

    app.route('/tampiluser/:id')
        .get(jsonku.tampiliduser);
    
    app.route('/ubahuser')
        .put(jsonku.ubahuser);
    
    app.route('/hapususer')
        .delete(jsonku.hapususer);


        
    app.route('/tampillevel')
        .get(jsonku.tampillevel);

    app.route('/tampillevel/:id')
        .get(jsonku.tampilidlevel);

    app.route('/tambahlevel')
        .post(jsonku.tambahlevel);

    app.route('/ubahlevel')
        .put(jsonku.ubahlevel);

    app.route('/hapuslevel')
        .delete(jsonku.hapuslevel);

};