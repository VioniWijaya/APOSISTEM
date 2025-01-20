module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('admin', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: Sequelize.STRING(100),
      email: Sequelize.STRING(100),
      password: Sequelize.STRING(255),
      nip: Sequelize.STRING(50),
      role: Sequelize.ENUM('Super Admin', 'Admin'),
      foto_profile: Sequelize.STRING(255),
      no_hp: Sequelize.STRING(15),
      alamat: Sequelize.TEXT,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('admin');
  },
};
