const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Times = sequelize.define('Times', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  tag: {
    type: DataTypes.STRING(10)
  },
  logo_url: {
    type: DataTypes.STRING(255)
  },
  liga: {
    type: DataTypes.STRING(50)
  }
}, {
  tableName: 'times',
  timestamps: false
});

module.exports = Times;