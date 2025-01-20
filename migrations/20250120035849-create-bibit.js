module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bibit', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: Sequelize.STRING(100),
      jumlah: Sequelize.INTEGER,
      deskripsi: Sequelize.TEXT,
      foto_bibit: Sequelize.STRING(255),
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('bibit');
  },
};
