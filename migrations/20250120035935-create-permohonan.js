module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('permohonan', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      admin_id: Sequelize.INTEGER,
      bibit_permohonan_id: Sequelize.INTEGER,
      nama_pemohon: Sequelize.STRING(100),
      foto_ktp: Sequelize.STRING(255),
      tujuan: Sequelize.TEXT,
      luas_lahan: Sequelize.DECIMAL(10, 2),
      foto_lahan: Sequelize.STRING(255),
      koordinat: Sequelize.STRING(50),
      foto_surat_pengantar: Sequelize.STRING(255),
      nik: Sequelize.STRING(16),
      lokasi_tanam: Sequelize.TEXT,
      no_hp: Sequelize.STRING(15),
      alamat: Sequelize.TEXT,
      agama: Sequelize.STRING(50),
      tempat_lahir: Sequelize.STRING(100),
      tgl_lahir: Sequelize.DATE,
      pekerjaan: Sequelize.STRING(100),
      status_permohonan: Sequelize.STRING(50),
      tanggal_jemput: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('permohonan');
  },
};
