var express = require('express');
var router = express.Router();
const adminController = require('../controller/adminController');
const { ensureAuth, checkRole } = require('../middleware/auth');

// Profil route
router.get('/profil', 
    ensureAuth, 
    checkRole(['Admin']), 
    adminController.getEachAdmin
);

// Rute untuk dashboard Admin
router.get('/dashboard', ensureAuth, checkRole(['Admin']), (req, res) => {
    res.render('admin/dashboard');
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