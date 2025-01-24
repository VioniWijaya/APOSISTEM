'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('riwayat_permohonan', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      permohonan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'permohonan', // Nama tabel referensi
          key: 'id',          // Primary key tabel referensi
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'admin', // Nama tabel referensi
          key: 'id',      // Primary key tabel referensi
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status: {
        type: Sequelize.ENUM('Ditolak', 'Diterima'),
        allowNull: false,
      },
      tanggal_jemput: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('riwayat_permohonan');
  },
};
