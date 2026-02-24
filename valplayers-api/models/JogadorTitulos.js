const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const JogadorTitulos = sequelize.define('JogadorTitulos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  jogador_id: {
    type: DataTypes.INTEGER
  },
  titulo_id: {
    type: DataTypes.INTEGER
  },
  time_id: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'jogador_titulos',
  timestamps: false
});

module.exports = JogadorTitulos;    