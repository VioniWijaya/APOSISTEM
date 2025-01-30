// const express = require('express');
// const router = express.Router();
// const authController = require('../controller/authController');
// const { ensureGuest, ensureAuth, checkRole } = require('../middleware/auth');

// // Rute untuk login        
// router.get('/login', ensureGuest, (req, res) => {
//   res.render('admin/loginAdmin', { error: req.query.error || null });
// });

// router.post('/login', authController.postLogin);

// // Rute untuk logout
// router.get('/logout', ensureAuth, authController.logout);

// // Rute untuk dashboard Super Admin
// router.get('/superadmin/dashboard', ensureAuth, checkRole(['Super Admin']), (req, res) => {
//   res.render('dashboard/superadmin');
// });

// // Rute untuk dashboard Admin
// router.get('/admin/dashboard', ensureAuth, checkRole(['Admin']), (req, res) => {
//   res.render('dashboard/admin');
// });

// module.exports = router;
