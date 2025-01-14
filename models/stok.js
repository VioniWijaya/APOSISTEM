'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stok extends Model {
    static associate(models) {
    }
  }
  Stok.init({
    id_bibit: DataTypes.INTEGER,
    nama_bibit: DataTypes.STRING,
    stok_bibit: DataTypes.INTEGER,
    foto: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stok',
  });
  return Stok;
};