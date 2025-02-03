const express = require("express");
const router = express.Router();
const multer = require("multer");
const superAdminController = require("../controller/superAdminController");


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

// Konfigurasi upload file
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "public/uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });


// const upload = multer({ storage });

// Rute untuk menampilkan form tambah admin
router.get("/admin/tambah", superAdminController.tampilFormTambahAdmin);

// Rute untuk menangani proses tambah admin
router.post("/admin/tambah", upload.single("foto_profile"), superAdminController.tambahAdmin);

module.exports = router;
