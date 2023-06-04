module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('roles', [
      {
        name: 'ADMIN',
        permissions: JSON.stringify({block_user: true, delete_user: true, delete_post: true, assign_roles: true}),
        created_at: new Date(), updated_at: new Date()
      },
      {
        name: 'MODERATOR',
        permissions: JSON.stringify({block_user: true, delete_post: true}),
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

    await queryInterface.bulkInsert('countries', [
      {
        countries: 'United States',
        iso2: 'US',
        iso3: 'USA',
        lang: 'English',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        countries: 'Germany',
        iso2: 'DE',
        iso3: 'DEU',
        lang: 'German',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        countries: 'China',
        iso2: 'CN',
        iso3: 'CHA',
        lang: 'Chinese',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        countries: 'Ukraine',
        iso2: 'UA',
        iso3: 'UKR',
        lang: 'Ukrainian',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('roles', null, {});
    await queryInterface.bulkDelete('countries', null, {});
  }
};
