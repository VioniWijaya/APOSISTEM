// const jwt = require('jsonwebtoken');

// const authMiddleware = (allowedRoles = []) => {
//   return (req, res, next) => {
//     const token = req.cookies.token;
    
//     if (!token) {
//       console.log('No token found. Redirecting to login...');
//       return res.redirect('/auth/login');
//     }

//     try {
//       // Use the same secret key as in islogin.js
//       const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
//       console.log('Decoded Token:', decoded);
//       req.user = decoded;

//       // Convert both to arrays and check if roles intersect
//       const userRoles = Array.isArray(decoded.role) ? decoded.role : [decoded.role];
//       const requiredRoles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

//       const hasPermission = userRoles.some(role => requiredRoles.includes(role));

//       if (!hasPermission) {
//         console.log('Access denied: role mismatch');
//         console.log('Expected Roles:', requiredRoles, 'User Roles:', userRoles);
//         return res.redirect('/auth/login');
//       }

//       next();
//     } catch (error) {
//       console.error('JWT Error:', error);
//       res.clearCookie('token');
//       return res.redirect('/auth/login');
//     }
//   };
// };


// module.exports = authMiddleware;