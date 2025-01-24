'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bibit', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
      nama: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deskripsi: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      foto_bibit: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bibit');
  },
};
