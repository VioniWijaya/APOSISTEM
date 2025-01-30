module.exports = (sequelize, DataTypes) => {
    return sequelize.define('RiwayatBibit', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bibit_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'bibit',
          key: 'id'
        }
      },
      admin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'admin',
          key: 'id'
        }
      },
      produksi: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      distribusi: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tanggal_update: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'RiwayatBibit',
      tableName: 'riwayat_bibit',
      timestamps: false,
      freezeTableName: true
    });
  };
  