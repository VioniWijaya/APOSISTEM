var express = require('express');
var router = express.Router();
const { ensureAuth, checkRole } = require('../middleware/auth');

// router.get('/dashboard', (req, res) => {
//   res.render('superadmin/dashboard');
// });

// Rute untuk dashboard Super Admin
router.get('/dashboard', ensureAuth, checkRole(['Super Admin']), (req, res) => {
  res.render('superadmin/dashboard');
});
module.exports = router;