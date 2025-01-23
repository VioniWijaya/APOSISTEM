const bcrypt = require('bcryptjs');
const { Admin } = require('../models');

module.exports = {
  // Handle login logic
  postLogin: async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.redirect('/auth/login?error=' + encodeURIComponent('Email dan password harus diisi'));
    }
  
    try {
      const admin = await Admin.findOne({ where: { email } });
  
      if (!admin) {
        return res.redirect('/auth/login?error=' + encodeURIComponent('Email tidak ditemukan'));
      }
  
      const isMatch = await bcrypt.compare(password, admin.password);
  
      if (!isMatch) {
        return res.redirect('/auth/login?error=' + encodeURIComponent('Password salah'));
      }
  
      req.session.id = admin.id;
      req.session.role = admin.role;
  
      if (admin.role === 'Super Admin') {
        return res.redirect('/superadmin/dashboard');
      } else if (admin.role === 'Admin') {
        return res.redirect('/admin/dashboard');
      } else {
        return res.redirect('/auth/login?error=' + encodeURIComponent('Role tidak dikenali'));
      }
    } catch (error) {
      console.error('Login error:', error);
      return res.redirect('/auth/login?error=' + encodeURIComponent('Terjadi kesalahan saat login'));
    }
  },

  // Logout handler
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Logout error:', err);
      }
      res.redirect('/auth/login');
    });
  },
};