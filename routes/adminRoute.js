var express = require('express');
var router = express.Router();

router.get('/dashboard', (req, res) => {
    res.render('admin/beranda');
});

router.get('/profil', (req, res) => {
    res.render('admin/profilAdm');
});

module.exports = router;