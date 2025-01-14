const multer = require('multer');
const path = require('path');
const { Stok } = require('../models');

// Konfigurasi multer untuk penyimpanan file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Pastikan folder uploads tersedia
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Nama file unik
    }
});

const upload = multer({ storage: storage });

// Fungsi untuk mengambil semua stok
exports.getAllStok = async (req, res) => {
    try {
        const stok = await Stok.findAll();
        res.render('admin/kelolabibit', { stok });
    } catch (error) {
        console.error('Error saat mengambil stok:', error.message);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

// Fungsi untuk menambah stok
exports.addStok = [
    upload.single('foto'),  // Middleware multer untuk menangani file
    async (req, res) => {
        try {
            const { nama_bibit, stok_bibit, deskripsi } = req.body;
            if (!req.file) {
                return res.status(400).send('Foto harus diupload.');
            }
            const foto = req.file.filename;

            await Stok.create({ nama_bibit, stok_bibit, deskripsi, foto });
            res.redirect('/admin/kelolabibit');
        } catch (error) {
            console.error('Error saat menambah stok:', error.message);
            res.status(500).send('Terjadi kesalahan pada server');
        }
    }
];

// Fungsi untuk menghapus stok
exports.deleteStok = async (req, res) => {
    const { id } = req.params;
    try {
        await Stok.destroy({ where: { id_bibit: id } });
        res.redirect('/admin/kelolabibit');
    } catch (error) {
        console.error('Error saat menghapus stok:', error.message);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};
