// const express = require('express');
// const router = express.Router();
// const authController = require('../controller/authController');
// const { ensureGuest, ensureAuth, checkRole } = require('../middleware/auth');


// Rute untuk login
router.get('/login',  (req, res) => {
  res.render('admin/loginAdmin', { error: req.query.error || null });
});

// // Rute untuk login        
// router.get('/login', ensureGuest, (req, res) => {
//   res.render('admin/loginAdmin', { error: req.query.error || null });
// });


// router.post('/login', authController.postLogin);

// // Rute untuk logout
// router.get('/logout', ensureAuth, authController.logout);



// module.exports = router;
