const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Admin = sequelize.define('Admin', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nip: DataTypes.STRING(50),
    role: {
      type: DataTypes.ENUM('Super Admin', 'Admin'),
      allowNull: false,
    },
    foto_profile: DataTypes.STRING(255),
    no_hp: DataTypes.STRING(15),
    alamat: DataTypes.TEXT,
  }, {
    tableName: 'admin',
    timestamps: true,
  });

  return Admin;
};
