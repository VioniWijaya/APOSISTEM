'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Koneksi ke database berhasil!');
  })
  .catch((error) => {
    console.error('Koneksi ke database gagal:', error.message);
  });

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);  // Menjalankan fungsi relasi untuk setiap model
  }
});

// Relasi antara tabel
db.Admin.hasMany(db.Permohonan, { foreignKey: 'admin_id', as: 'permohonan' });
db.Permohonan.belongsTo(db.Admin, { foreignKey: 'admin_id', as: 'admin' });

db.Permohonan.hasMany(db.BibitPermohonan, { foreignKey: 'bibit_permohonan_id', as: 'bibit_permohonan' });
db.BibitPermohonan.belongsTo(db.Permohonan, { foreignKey: 'bibit_permohonan_id', as: 'permohonan' });

db.Bibit.hasMany(db.BibitPermohonan, { foreignKey: 'bibit_id', as: 'bibit_permohonan' });
db.BibitPermohonan.belongsTo(db.Bibit, { foreignKey: 'bibit_id', as: 'bibit' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;