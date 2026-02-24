const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize('valplayersdb','root','1011',{
    host:'localhost', 
    dialect: 'mysql',
    define:{
        timestamps: false
    }
})

async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log('Bamco de dados conectado!!')
        console.log('---------------------------------')
    }
    catch{
        console.log('Erro na conexão')
        console.log('---------------------------------')
    }
    
}

testConnection();
module.exports = sequelize