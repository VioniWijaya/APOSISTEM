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

router.get('/tambahStok', (req, res) => {
    res.render('admin/tambahStok'); 
});

router.post('/tambahStok', adminController.addStok);

router.post('/hapusStok/:id', adminController.deleteStok);

module.exports = router;