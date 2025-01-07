var express = require('express');
var router = express.Router();

router.get('/user', (req, res) => {
    res.render('user/login');
});
router.get('/admin', (req, res) => {
    res.render('admin/loginAdmin');
});

module.exports = router;