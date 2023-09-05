const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SignUp = sequelize.define('SignUp', {
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  facebook: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  livingplace: {
    type: DataTypes.STRING,
    allowNull: false
  },
  highschool: {
    type: DataTypes.STRING,
    allowNull: false
  },
  uni: {
    type: DataTypes.STRING,
    allowNull: true
  },
  otheruni: {
    type: DataTypes.STRING,
    allowNull: true
  },
  uniplace: {
    type: DataTypes.STRING,
    allowNull: true
  },
  universityyear: {
    type: DataTypes.STRING,
    allowNull: true
  },
  major: {
    type: DataTypes.STRING,
    allowNull: true
  },
  long1: {
    type: DataTypes.STRING,
    allowNull: true
  },
  long2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  long3: {
    type: DataTypes.STRING,
    allowNull: true
  },
  long4: {
    type: DataTypes.STRING,
    allowNull: true
  },
  timeperweek: {
    type: DataTypes.STRING,
    allowNull: true
  },
  appliedbefore: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  mostpreferred: {
    type: DataTypes.STRING,
    allowNull: true
  },
  secondpreferred: {
    type: DataTypes.STRING,
    allowNull: true
  },
  long5: {
    type: DataTypes.STRING,
    allowNull: true
  },
  long6: {
    type: DataTypes.STRING,
    allowNull: true
  },
  long7: {
    type: DataTypes.STRING,
    allowNull: true
  },
  long8: {
    type: DataTypes.STRING,
    allowNull: true
  },
  channel: {
    type: DataTypes.STRING,
    allowNull: true
  },
  otherchannel: {
    type: DataTypes.STRING,
    allowNull: true
  },
  receiveinformation: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  gocamp: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  utm_source: {
    type: DataTypes.STRING,
    allowNull: true
  },
  utm_medium: {
    type: DataTypes.STRING,
    allowNull: true
  },
  utm_campaign: {
    type: DataTypes.STRING,
    allowNull: true
  },
  utm_term: {
    type: DataTypes.STRING,
    allowNull: true
  },
  utm_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  utm_content: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = SignUp;