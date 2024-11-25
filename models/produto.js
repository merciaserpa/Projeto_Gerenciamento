const {sequelizeDb, sequelizeConfig} = require('./database')// Estamos utilizando o recurso de desestruturação de objetos para importar apenas os módulos necessários
const estoque = require('./estoque')//importando a tabela estoque

//CRIANDO A TABELA
const produtos = sequelizeConfig.define(
    'produtos',//nome da tabela
    {
        nome:{type:sequelizeDb.STRING},
        preco:{type:sequelizeDb.FLOAT},
    }
)

// CONFIGURAR A CHAVE ESTRANGEIRA
estoque.hasMany(produtos,{
    onDelete:'CASCADE',
    onDpdate:'CASCADE'
})
produtos.belongsTo(estoque)//Estou dizendo que o produto pertence apenas 1 estoque
produtos.sync()
module.exports = produtos