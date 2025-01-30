const bcrypt = require('bcryptjs');
const { Admin } = require('../models');

module.exports = {
  // Handle login logic
  postLogin: async (req, res) => {
    try {
        const admin = await Admin.findOne({ where: { email: req.body.email } });
        
        if (admin && await bcrypt.compare(req.body.password, admin.password)) {
            console.log('Login successful for:', admin.email);
            
            // Simpan data ke session
            req.session.user = {
                id: admin.id,
                role: admin.role,
                email: admin.email,
                nama: admin.nama
            };
            
            console.log('Session after login:', req.session);
            
            if (admin.role === 'Admin') {
                return res.redirect('/admin/dashboard');
            }
        }
        
        console.log('Login failed');
        req.flash('error', { msg: 'Email atau password salah' });
        res.redirect('/auth/login');
    } catch (error) {
        console.error('Login error:', error);
        req.flash('error', { msg: 'Terjadi kesalahan saat login' });
        res.redirect('/auth/login');
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