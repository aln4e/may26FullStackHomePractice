'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


    queryInterface.addColumn(
    'Users',
     'authToken',
     Sequelize.STRING)
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {


    queryInterface.removeColumn(
          'Users',
          'authToken')

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
