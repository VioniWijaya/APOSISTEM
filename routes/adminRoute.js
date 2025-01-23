var express = require('express');
var router = express.Router();
const adminController = require('../controller/adminController');

router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard');
});

router.get('/profil', (req, res) => {
    res.render('admin/profilAdm');
});


router.get('/tambahStok', (req, res) => {
    res.render('admin/tambahStok'); 
});

router.post('/tambahStok', adminController.addStok);

router.post('/hapusStok/:id', adminController.deleteStok);

router.get('/stokAdmin', (req, res) => {
    res.render('admin/stokAdmin');
});

router.get('/kelolabibit', (req, res) => {
    res.render('admin/kelolabibit');
});

module.exports = router;