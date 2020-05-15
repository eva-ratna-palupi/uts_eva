var express = require('express');
var auth = require ('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');

router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

//alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(), auth.halamanrahasia);
router.get('/api/v1/rahasia2', verifikasi(), auth.halamanrahasia2);

module.exports = router;