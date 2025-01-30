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
