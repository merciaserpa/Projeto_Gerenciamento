const sequelizeDb = require('sequelize')
const sequelizeConfig = new sequelizeDb(
    'lojaEletronicos_db',// O nome do banco de dados
    'root', // nome de usuário do banco
    '', // senha do banco de dados

    {
        dialect:'sqlite',
        storage:'./LojaEletronicos.sqlite'
    }
)

module.exports = {sequelizeDb, sequelizeConfig}