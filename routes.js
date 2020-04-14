'use strict';

module.exports= function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsparepart')
        .get(jsonku.tampilsparepart);
    
    app.route('/tambahsparepart')
        .get(jsonku.tambahsparepart);

}
