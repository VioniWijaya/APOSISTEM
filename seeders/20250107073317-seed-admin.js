const bcrypt = require('bcrypt');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('admin', [
      {
        nama: 'Super Admin',
        email: 'superadmin@example.com',
        password: bcrypt.hashSync("super", 10),
        nip: '1234567890',
        role: 'Super Admin',
        foto_profile: 'https://example.com/path-to-super-admin-photo.jpg',
        no_hp: '081234567890',
        alamat: 'Jalan Raya No. 1, Kota Besar',
      },
      {
        nama: 'Admin Biasa',
        email: 'admin@example.com',
        password: bcrypt.hashSync("admin", 10),
        nip: '9876543210',
        role: 'Admin',
        foto_profile: 'https://example.com/path-to-admin-photo.jpg',
        no_hp: '082345678901',
        alamat: 'Jalan Kebun No. 2, Kota Kecil',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admin', null, {});
  }
};
