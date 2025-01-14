// controllers/stokController.js
const { Stok } = require('../models');

exports.getAllStok = async (req, res) => {
    try {
        const stok = await Stok.findAll();
        console.log('Data stok berhasil diambil:', stok);
        res.render('admin/kelolabibit', { stok });
    } catch (error) {
        console.error('Error saat mengambil data stok:', error.message);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};


exports.editStok = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Stok.findByPk(id);
        if (!item) {
            return res.status(404).send('Bibit tidak ditemukan');
        }
        res.render('admin/edit-bibit', { item });
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

exports.deleteStok = async (req, res) => {
    const { id } = req.params;
    try {
        await Stok.destroy({ where: { id_bibit: id } });
        res.redirect('/admin/kelolabibit');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

exports.addStok = async (req, res) => {
    // Logika untuk menambahkan bibit baru
    // Anda bisa menggunakan req.body untuk mendapatkan data dari form
};