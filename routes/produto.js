const express = require ('express')
const router = express.Router()

//IMPORTANDO AS TABELAS 
const produtos = require("../models/produto")
const estoque = require("../models/estoque")

//CRRIANDO AS ROTAS
//1ª ROTA - INSERIR DADOS NA TABELA
router.post('/store',async(req, res)=>{
    const resultado = await produtos.create({
        nome:req.body.nome,
        preco:req.body.preco,
        estoqueId:req.body.estoque//Esse campo é a chave estrangeira
    })

    if(resultado){
        res.redirect('/')
    }
    else{
        res.json({erro:"Os dados não foram cadastrados no banco"})
    }
})

//2ª ROTA - EXIBIR A PÁGINA INICIAL DO PRODUTO
router.get('/show',(req, res)=>{
    res.send("<h1>Página inicial do produto</h1>")
})

//3ª ROTA - CONSULTAR DADOS DA TABELA   
router.get('/',async(req, res)=>{
    const resultado = await produtos.findAll({include:estoque})// o include:estoque é como o sequelize faz para poder realizar consultas com join

    if (resultado){
        console.log(resultado)
        res.render("produto/index", {dados:resultado})
    }
    else{
        console.log("Não foi possível exibir os dados")
    }
})

//4ª ROTA - DELETAR DADOS DA TABELA
//:id significa que iremos passar um valor na rota, ou seja, iremos informar um valor que poderá ser diferente e que será armazenado pela variável :id
router.get('/destroy/:id',async(req, res)=>{
    const resultado = await produtos.destroy ({
        where:{
            id:req.params.id// estamos recebendo o id via parâmetro que está sendo passado na rota, no caso, é o :id que estamos recebendo
        }
    })
    res.redirect("/")
})

//5° ROTA - EXIBIR FORMULÁRIO DE CADASTRO
router.get("/create",async(req, res)=>{

    let resultado = await estoque.findAll()

    if(resultado){
        console.log(resultado)
        res.render("produto/addProduto",{dados:resultado})
    }
    else{
        console.log ("Não foi possível carregar os dados")
        res.redirect('/')// redirecionando para a página inicial
    }
    
})



module.exports = router