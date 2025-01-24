module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Admin', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    role: {
      type: DataTypes.ENUM('Super Admin', 'Admin'),
      allowNull: false
    },
    foto_profile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    no_hp: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Admin',
    tableName: 'admin',
    timestamps: false,
    freezeTableName: true
  });
};
