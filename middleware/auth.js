module.exports = {
    // Middleware to protect routes for authenticated admins only
    ensureAuth: (req, res, next) => {
      if (req.session && req.session.id) {
        return next();
      }
      req.flash('error', { msg: 'Silakan login terlebih dahulu' });
      res.redirect('/login');
    },
  
    // Middleware to prevent logged-in users from accessing login page
    ensureGuest: (req, res, next) => {
        if (req.session && req.session.id) {
            if (req.originalUrl === '/login') {
              return req.session.role === 'Super Admin'
                ? res.redirect('/superadmin/dashboard')
                : res.redirect('/admin/dashboard');
            }
          }
      next();
    },
  
    // Middleware to check role-based access
    checkRole: (roles) => {
      return (req, res, next) => {
        if (!req.session || !req.session.id) {
          req.flash('error', { msg: 'Silakan login terlebih dahulu' });
          return res.redirect('/login');
        }
  
        if (!roles.includes(req.session.role)) {
          req.flash('error', { msg: 'Anda tidak memiliki akses' });
          return res.redirect('/login');
        }
  
        next();
      };
    },
  };  