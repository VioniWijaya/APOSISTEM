module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bibit_permohonan', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bibit_id: Sequelize.INTEGER,
      jumlah: Sequelize.INTEGER,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('bibit_permohonan');
  },
};
