const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Bibit', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    jumlah: DataTypes.INTEGER,
    deskripsi: DataTypes.TEXT,
    foto_bibit: DataTypes.STRING(255),
  }, {
    tableName: 'bibit' ,
    timestamps: false
  });
  
};
