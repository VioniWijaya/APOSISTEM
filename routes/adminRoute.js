var express = require('express');
var router = express.Router();
const adminController = require('../controller/adminController');
const multer = require('multer');

router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard');
});

router.get('/profil', (req, res) => {
    res.render('admin/profilAdm');
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Route utama stok
router.get('/stokAdmin', adminController.getStok);

// Route untuk tambah stok (dengan upload gambar)
router.post('/admin/tambahStok', upload.single('foto_bibit'), adminController.tambahStok);

// Route untuk hapus stok
router.get('/stok/hapus/:id', adminController.hapusStok);

// Route untuk tampilkan halaman edit bibit
router.get('/stokAdmin/edit/:id', async (req, res) => {
    try {
        const bibitId = req.params.id;
        const bibit = await Bibit.findById(bibitId); // Sesuaikan dengan model Anda

        if (!bibit) {
            return res.status(404).send('Bibit tidak ditemukan');
        }

        res.render('admin/kelolabibit', { bibit }); // Kirim `bibit` ke EJS
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
});


// Route untuk mengupdate data bibit
router.post('/edit/:id', upload.single('foto_bibit'), async (req, res) => {
    const { id } = req.params;
    const { nama_bibit, stok_bibit, jumlah_bibit, deskripsi } = req.body;

    try {
        const bibit = await Bibit.findOne({ where: { id: id } });

        if (!bibit) {
            return res.status(404).send('Bibit tidak ditemukan');
        }

        // Update data bibit
        bibit.nama_bibit = nama_bibit;
        bibit.stok_bibit = stok_bibit;
        bibit.jumlah_bibit = jumlah_bibit;
        bibit.deskripsi = deskripsi;

        if (req.file) {
            bibit.foto_bibit = req.file.filename; // Update foto jika ada file baru
        }

        await bibit.save();
        res.redirect('/admin/stokAdmin'); // Redirect setelah berhasil
    } catch (error) {
        console.error('Error saat memperbarui data bibit:', error.message);
        res.status(500).send('Terjadi kesalahan pada server');
    }
});

router.get('/detailBibit', (req, res) => {
    res.render('admin/detailBibit');
});

router.get('/editBibit', (req, res) => {
    res.render('admin/editBibit');
});

module.exports = router;