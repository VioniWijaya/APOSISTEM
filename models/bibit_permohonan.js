const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('BibitPermohonan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bibit_id: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
  });
};
