
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Pastikan folder 'public/uploads/' ada
const uploadDir = path.join(__dirname, "../public/uploads/");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Konfigurasi Multer untuk upload file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

module.exports = upload;
