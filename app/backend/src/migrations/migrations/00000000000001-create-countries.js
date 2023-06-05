module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      countries: {
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true,
      },
      iso2: {
        type: Sequelize.STRING(2),
        allowNull: false,
        primaryKey: true,
      },
      iso3: {
        type: Sequelize.STRING(3),
        allowNull: false,
        primaryKey: true,
      },
      lang: {
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('countries');
  }
};
