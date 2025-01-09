var express = require('express');
var router = express.Router();

router.get('/beranda', (req, res) => {
    res.render('user/beranda');
});

router.get('/riwayat', (req, res) => {
    res.render('user/riwayat');
});

router.get('/pilihkel', (req, res) => {
    res.render('user/pilihkel');
});

router.get('/stok', (req, res) => {
    res.render('user/stok');
});

router.get('/keranjang', (req, res) => {
    res.render('user/keranjang');
});
module.exports = router;