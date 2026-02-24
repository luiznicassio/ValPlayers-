const Jogadores = require('./jogadores');
const Times = require('./Times');
const Titulos = require('./Titulos');
const JogadorTitulos = require('./JogadorTitulos');

// 🧑 jogador → time atual
Jogadores.belongsTo(Times, {
  foreignKey: 'time_id'
});

Times.hasMany(Jogadores, {
  foreignKey: 'time_id'
});

// 🧑 ↔ 🏆 N:N
Jogadores.belongsToMany(Titulos, {
  through: JogadorTitulos,
  foreignKey: 'jogador_id',
  otherKey: 'titulo_id'
});

Titulos.belongsToMany(Jogadores, {
  through: JogadorTitulos,
  foreignKey: 'titulo_id',
  otherKey: 'jogador_id'
});

// 🔥 pivot → time do título
JogadorTitulos.belongsTo(Times, {
  foreignKey: 'time_id'
});

Times.hasMany(JogadorTitulos, {
  foreignKey: 'time_id'
});

module.exports = {
  Jogadores,
  Times,
  Titulos,
  JogadorTitulos
};