const multer = require('multer');
const path = require('path');
const { Bibit } = require('../models');

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

exports.getStok = async (req, res) => {
    try {
        // Ambil data stok dari database
        const bibit = await Bibit.findAll();
        res.render('admin/stokAdmin', { bibit });
    } catch (error) {
        console.error('Error mengambil data stok:', error.message);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

// Tambah stok (form submit)
exports.tambahStok = (req, res) => {
    const { nama, jumlah, deskripsi } = req.body;
    let fotoBibit = req.file ? req.file.filename : null;

    db.query('INSERT INTO stok (nama, jumlah, deskripsi, foto_bibit) VALUES (?, ?, ?, ?)', 
        [nama, jumlah, deskripsi, fotoBibit], 
        (err) => {
            if (err) throw err;
            res.redirect('/admin/stok');
        }
    );
};

// Hapus stok
exports.hapusStok = (req, res) => {
    const { id } = req.params;

    // Ambil foto untuk dihapus jika ada
    db.query('SELECT foto_bibit FROM stok WHERE id = ?', [id], (err, results) => {
        if (err) throw err;

        if (results.length > 0 && results[0].foto_bibit) {
            const filePath = path.join(__dirname, '../public/uploads/', results[0].foto_bibit);
            fs.unlink(filePath, (err) => {
                if (err) console.log('Gagal hapus foto:', err);
            });
        }

        db.query('DELETE FROM stok WHERE id = ?', [id], (err) => {
            if (err) throw err;
            res.redirect('/admin/stok');
        });
    });
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

exports.getEachAdmin = async (req, res) => {
    try {
        console.log('Session user:', req.session.user);
        const adminId = req.session.user ? req.session.user.id : null;
        
        if (!adminId) {
            console.log('Admin ID not found in session');
            return res.status(401).send("Unauthorized: Admin belum login");
        }

        const profil = await Admin.findOne({ 
            where: { id: adminId },
            attributes: ['id', 'nama', 'instansi', 'email', 'alamat', 'no_telp', 'role'] 
        });

        console.log('Retrieved profile:', profil);

        if (!profil) {
            console.log('Profile not found for ID:', adminId);
            return res.status(404).send("Data tidak ditemukan");
        }

        res.render('admin/profilAdm', { 
            profil,
            user: req.session.user 
        });
    } catch (error) {
        console.error('Error in getEachAdmin:', error);
        res.status(500).send("Terjadi kesalahan mengambil data admin");
    }
};