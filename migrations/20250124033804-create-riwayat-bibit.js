'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('riwayat_bibit', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      bibit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'bibit', // Nama tabel referensi
          key: 'id',      // Primary key tabel referensi
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
      produksi: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      distribusi: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tanggal_update: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('riwayat_bibit');
  },
};
