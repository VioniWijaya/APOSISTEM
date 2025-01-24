'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bibit_permohonan', {
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
      jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bibit_permohonan');
  },
};
