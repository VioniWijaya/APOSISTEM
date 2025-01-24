module.exports = (sequelize, DataTypes) => {
    return sequelize.define('RiwayatPermohonan', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      permohonan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'permohonan',
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
      status: {
        type: DataTypes.ENUM('Ditolak', 'Diterima'),
        allowNull: false
      },
      tanggal_jemput: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'RiwayatPermohonan',
      tableName: 'riwayat_permohonan',
      timestamps: false,
      freezeTableName: true
    });
  };
  