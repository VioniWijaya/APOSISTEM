const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Permohonan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admin_id: DataTypes.INTEGER,
    bibit_permohonan_id: DataTypes.INTEGER,
    nama_pemohon: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    foto_ktp: DataTypes.STRING(255),
    tujuan: DataTypes.TEXT,
    luas_lahan: DataTypes.DECIMAL(10, 2),
    foto_lahan: DataTypes.STRING(255),
    koordinat: DataTypes.STRING(50),
    foto_surat_pengantar: DataTypes.STRING(255),
    nik: DataTypes.STRING(16),
    lokasi_tanam: DataTypes.TEXT,
    no_hp: DataTypes.STRING(15),
    alamat: DataTypes.TEXT,
    agama: DataTypes.STRING(50),
    tempat_lahir: DataTypes.STRING(100),
    tgl_lahir: DataTypes.DATE,
    pekerjaan: DataTypes.STRING(100),
    status_permohonan: DataTypes.STRING(50),
    tanggal_jemput: DataTypes.DATE,
  });
};
