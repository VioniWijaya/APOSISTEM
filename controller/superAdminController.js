const bcrypt = require("bcryptjs");
const { Admin } = require("../models");
const path = require("path");
const fs = require("fs");

exports.tampilFormTambahAdmin = (req, res) => {
    res.render("superadmin/tambahAdm");
};

exports.tambahAdmin = async (req, res) => {
    try {
        const { nama, email, password, nip, no_hp, alamat } = req.body;
        if (!/^\d{12,15}$/.test(no_hp)) {
            return res.status(400).json({ success: false, message: "Nomor HP harus terdiri dari 12-15 angka." });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Upload file foto jika ada
        let foto_profile = null;
        if (req.file) {
            foto_profile = `/uploads/${req.file.filename}`;
        }

        const newAdmin = await Admin.create({
            nama,
            email,
            password: hashedPassword,
            nip,
            role: "Admin",
            foto_profile,
            no_hp,
            alamat,
        });

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send("Terjadi kesalahan pada server");
    }
};
exports.tampilSemuaAdmin = async (req, res) => {
    try {
        const admins = await Admin.findAll(); // Mengambil semua data admin dari database
        res.render("superadmin/kelolaAdm", { admins }); // Kirim data ke view
    } catch (error) {
        console.error(error);
        res.status(500).send("Terjadi kesalahan pada server");
    }
};

exports.hapusAdmin = async (req, res) => {
    try {
        const adminId = req.params.id;
        const admin = await Admin.findByPk(adminId);

        if (!admin) {
            return res.status(404).json({ success: false, message: "Admin tidak ditemukan" });
        }

        // Hapus file foto jika ada
        if (admin.foto_profile) {
            const filePath = path.join(__dirname, "../public", admin.foto_profile);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }

        await admin.destroy();
        res.json({ success: true });
    } catch (error) {
        console.error("Error saat menghapus admin:", error);
        res.status(500).json({ success: false, message: "Terjadi kesalahan pada server" });
    }
};
exports.updatePassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { newPassword } = req.body;

        if (!newPassword || newPassword.length < 6) {
            return res.status(400).json({ success: false, message: "Password minimal 6 karakter." });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const admin = await Admin.findByPk(id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "Admin tidak ditemukan." });
        }

        admin.password = hashedPassword;
        await admin.save();

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Terjadi kesalahan pada server." });
    }
};




