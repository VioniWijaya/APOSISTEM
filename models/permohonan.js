module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Permohonan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bibit_permohonan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bibit_permohonan',
        key: 'id'
      }
    },
    inisiasi_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inisiasi',
        key: 'id'
      }
    },
    nama_pemohon: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    foto_ktp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tujuan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    luas_lahan: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    foto_lahan: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    koordinat: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    foto_surat_pengantar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nik: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true
    },
    lokasi_tanam: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    no_hp: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    agama: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tempat_lahir: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tgl_lahir: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pekerjaan: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    jenis_permohonan: {
      type: DataTypes.ENUM('Perorangan', 'Kelompok'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Permohonan',
    tableName: 'permohonan',
    timestamps: false,
    freezeTableName: true
  });
};
