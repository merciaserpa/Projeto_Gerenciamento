const {sequelizeDb, sequelizeConfig} = require('./database')

//CRIANDO DA TABELA
const estoque = sequelizeConfig.define(
    'estoque',
    {
        armazenamento:{type:sequelizeDb.TEXT},
        quantidade_disponivel:{type:sequelizeDb.INTEGER},
        data_entrada:{type:sequelizeDb.DATE}
    }
)

estoque.sync()
module.exports = estoque