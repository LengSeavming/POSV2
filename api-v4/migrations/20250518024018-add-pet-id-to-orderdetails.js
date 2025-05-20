'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // async up (queryInterface, Sequelize) {
  //   /**
  //    * Add altering commands here.
  //    *
  //    * Example:
  //    * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
  //    */
  // },

  // async down (queryInterface, Sequelize) {
  //   /**
  //    * Add reverting commands here.
  //    *
  //    * Example:
  //    * await queryInterface.dropTable('users');
  //    */
  // }

  //Update for pet and product
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('order_details', 'pet_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'pets', // Replace with actual table name if different
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('order_details', 'pet_id');
  }
};
