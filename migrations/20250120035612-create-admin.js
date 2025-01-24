'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('admins', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      nip: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      role: {
        type: Sequelize.ENUM('Super Admin', 'Admin'),
        allowNull: false,
      },
      foto_profile: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      no_hp: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('admin');
  },
};
