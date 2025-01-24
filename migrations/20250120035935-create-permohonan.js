'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('permohonan', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      bibit_permohonan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'bibit_permohonan', // Tabel referensi
          key: 'id',                // Primary key dari tabel referensi
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      inisiasi_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'inisiasi', // Tabel referensi
          key: 'id',         // Primary key dari tabel referensi
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nama_pemohon: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      foto_ktp: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tujuan: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      luas_lahan: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      foto_lahan: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      koordinat: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      foto_surat_pengantar: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      nik: {
        type: Sequelize.STRING(16),
        allowNull: false,
        unique: true,
      },
      lokasi_tanam: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      no_hp: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      agama: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      tempat_lahir: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      tgl_lahir: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      pekerjaan: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      jenis_permohonan: {
        type: Sequelize.ENUM('Perorangan', 'Kelompok'),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('permohonan');
  },
};
