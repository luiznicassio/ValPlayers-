const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Titulos = sequelize.define('Titulos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_campeonato: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  imagem_trofeu: {
    type: DataTypes.STRING(255)
  },
  data_conquista: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'titulos',
  timestamps: false
});

module.exports = Titulos;