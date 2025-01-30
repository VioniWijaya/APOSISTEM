module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Bibit', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'admin',
        key: 'id'
      }
    },
    nama: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    foto_bibit: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Bibit',
    tableName: 'bibit',
    timestamps: false,
    freezeTableName: true

  });
  
};
