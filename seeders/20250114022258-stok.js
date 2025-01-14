module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Stoks', [
      {
        id_bibit: 1,
        nama_bibit: 'Bibit Mangga',
        stok_bibit: 400,
        foto: 'https://th.bing.com/th/id/OIP.MkPBATnWwipCYePfM34eDgHaFA?rs=1&pid=ImgDetMain', // Sesuaikan dengan path foto
        deskripsi: 'Bibit mangga berkualitas tinggi.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_bibit: 2,
        nama_bibit: 'Bibit Rambutan',
        stok_bibit: 100,
        foto: 'https://th.bing.com/th/id/OIP.QldCaDW9YdlVlUqkezkJ8wHaHy?rs=1&pid=ImgDetMain',
        deskripsi: 'Bibit rambutan manis dan cepat tumbuh.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stoks', null, {});
  }
};
