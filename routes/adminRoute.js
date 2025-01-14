var express = require('express');
var router = express.Router();
const adminController = require('../controller/adminController');

router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard');
});

router.get('/profil', (req, res) => {
    res.render('admin/profilAdm');
});

router.get('/kelolabibit', adminController.getAllStok);

module.exports = router;