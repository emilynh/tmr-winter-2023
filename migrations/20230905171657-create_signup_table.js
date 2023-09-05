'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SignUp', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.DATE
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dob: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      facebook: {
        allowNull: true,
        type: Sequelize.STRING
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING
      },
      livingplace: {
        allowNull: false,
        type: Sequelize.STRING
      },
      highschool: {
        allowNull: false,
        type: Sequelize.STRING
      },
      uni: {
        allowNull: true,
        type: Sequelize.STRING
      },
      otheruni: {
        allowNull: true,
        type: Sequelize.STRING
      },
      uniplace: {
        allowNull: true,
        type: Sequelize.STRING
      },
      universityyear: {
        allowNull: true,
        type: Sequelize.STRING
      },
      major: {
        allowNull: true,
        type: Sequelize.STRING
      },
      long1: {
        allowNull: true,
        type: Sequelize.STRING
      },
      long2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      long3: {
        allowNull: true,
        type: Sequelize.STRING
      },
      long4: {
        allowNull: true,
        type: Sequelize.STRING
      },
      timeperweek: {
        allowNull: true,
        type: Sequelize.STRING
      },
      appliedbefore: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      mostpreferred: {
        allowNull: true,
        type: Sequelize.STRING
      },
      secondpreferred: {
        allowNull: true,
        type: Sequelize.STRING
      },
      long5: {
        allowNull: true,
        type: Sequelize.STRING
      },
      long6: {
        allowNull: true,
        type: Sequelize.STRING
      },
      long7: {
        allowNull: true,
        type: Sequelize.STRING
      },
      long8: {
        allowNull: true,
        type: Sequelize.STRING
      },
      channel: {
        allowNull: true,
        type: Sequelize.STRING
      },
      otherchannel: {
        allowNull: true,
        type: Sequelize.STRING
      },
      receiveinformation: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      gocamp: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      utm_source: {
        allowNull: true,
        type: Sequelize.STRING
      },
      utm_medium: {
        allowNull: true,
        type: Sequelize.STRING
      },
      utm_campaign: {
        allowNull: true,
        type: Sequelize.STRING
      },
      utm_term: {
        allowNull: true,
        type: Sequelize.STRING
      },
      utm_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      utm_content: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SignUp');
  }
};