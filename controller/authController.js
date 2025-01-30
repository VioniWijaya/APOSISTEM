const express = require("express");
const router = express.Router();
const multer = require("multer");
const superAdminController = require("../controller/superAdminController");

// Konfigurasi upload file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Rute untuk menampilkan form tambah admin
router.get("/admin/tambah", superAdminController.tampilFormTambahAdmin);

// Rute untuk menangani proses tambah admin
router.post("/admin/tambah", upload.single("foto_profile"), superAdminController.tambahAdmin);

module.exports = router;
