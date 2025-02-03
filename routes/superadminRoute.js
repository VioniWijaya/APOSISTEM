const express = require("express");
const router = express.Router();
const path = require("path"); 
const fs = require("fs"); 
const superAdminController = require("../controller/superAdminController");
const upload = require("../middleware/upload");


// Rute untuk menampilkan form tambah admin
router.get("/admin/tambah", superAdminController.tampilFormTambahAdmin);

// Rute untuk menangani proses tambah admin
router.post("/admin/tambah", upload.single("foto_profile"), superAdminController.tambahAdmin);

// // Rute untuk dashboard Super Admin
router.get('/dashboard', (req, res) => {
   res.render('superadmin/dashboard'); 
 });

 router.get("/kelolaAdm", superAdminController.tampilSemuaAdmin); // Route untuk menampilkan data admin
 router.delete("/admin/hapus/:id", superAdminController.hapusAdmin);
 router.put("/admin/update-password/:id", superAdminController.updatePassword);


module.exports = router;
