module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('roles', [
      {
        name: 'ADMIN',
        permissions: JSON.stringify({
          block_user: true,
          delete_user: true,
          delete_post: true,
          assign_roles: true,
        }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'MODERATOR',
        permissions: JSON.stringify({
          block_user: true,
          delete_post: true,
        }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'USER',
        permissions: JSON.stringify({}),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
