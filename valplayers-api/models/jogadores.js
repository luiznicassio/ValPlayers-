const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jogador = sequelize.define('Jogador', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nick: { type: DataTypes.STRING(50), allowNull: false },
    nome: { type: DataTypes.STRING(150) },
    nascimento: { type: DataTypes.DATEONLY },
    nacionalidade: { type: DataTypes.STRING(50), defaultValue: 'Brasil' },
    foto_player: { type: DataTypes.STRING(255) },
    time_id: { type: DataTypes.INTEGER }
}, {
    tableName: 'jogadores',
    timestamps: false
});

module.exports = Jogador;