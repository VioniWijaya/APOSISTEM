module.exports = (sequelize, DataTypes) => {
  return sequelize.define('BibitPermohonan', {
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
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BibitPermohonan',
    tableName: 'bibit_permohonan',
    timestamps: false,
    freezeTableName: true
  });
};
