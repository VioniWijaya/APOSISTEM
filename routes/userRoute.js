var express = require('express');
var router = express.Router();

router.get('/riwayat', (req, res) => {
    res.render('user/riwayat');
});

router.get('/stok', (req, res) => {
    res.render('user/stok');
});

router.get('/keranjang', (req, res) => {
    res.render('user/keranjang');
});
module.exports = router;