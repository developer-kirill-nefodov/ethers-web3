module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('translations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      language: {
        type: Sequelize.STRING(2),
        allowNull: false,
        primaryKey: true,
      },
      data: {
        type: Sequelize.JSON,
        allowNull: false,
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
    await queryInterface.dropTable('translations');
  }
};
