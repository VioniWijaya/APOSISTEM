// const bcrypt = require('bcrypt');
// const Admin = require('./models/admin'); // Sesuaikan dengan lokasi model Anda

// const loginHandler = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Cari pengguna berdasarkan email
//     const user = await Admin.findOne({ where: { email } });

//     if (!user) {
//       return res.render('login', { pesan: [{ msg: 'Email tidak ditemukan' }] });
//     }

//     // Periksa password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.render('login', { pesan: [{ msg: 'Password salah' }] });
//     }

//     // Simpan data pengguna dalam sesi
//     req.session.user = {
//       id: user.id,
//       nama: user.nama,
//       role: user.role,
//     };

//     // Arahkan berdasarkan role
//     if (user.role === 'Super Admin') {
//       return res.redirect('/superadmin/dashboard');
//     } else if (user.role === 'Admin') {
//       return res.redirect('/admin/dashboard');
//     }

//     res.redirect('/auth/admin');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Terjadi kesalahan server');
//   }
// };

// module.exports = loginHandler;