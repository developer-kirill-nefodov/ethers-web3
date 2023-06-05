const crypto = require('crypto');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'admin@gmail.com',
        role: JSON.stringify({
          name: 'ADMIN',
          permissions: {block_user: true, delete_user: true, delete_post: true, assign_roles: true}
        }),
        password: crypto.pbkdf2Sync('root', '(_xxx_)(SALT)(_xxx_)', 1000, 64, 'sha512').toString('hex'),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: 'user@gmail.com',
        role: JSON.stringify({
          name: 'USER',
          permissions: {}
        }),
        password: crypto.pbkdf2Sync('root', '(_xxx_)(SALT)(_xxx_)', 1000, 64, 'sha512').toString('hex'),
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
