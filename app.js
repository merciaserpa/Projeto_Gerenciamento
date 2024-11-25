// CARREGAR OS MÓDULOS
const express = require("express")
const handlebars = require("express-handlebars")
const path = require("path")


const app = express()
const porta = 5800

//CONFIGURAR O EXPRESS PARA RECEBER DADOS DO FORMULÁRIO
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//CONFIGURANDO HANDLEBARS
app.engine("handlebars",handlebars.engine({extended:true}))
app.set("view engine", "handlebars")//definindo o handlebars como mecanismo de visualização padrão.

app.use(express.static(path.join(__dirname,'public')))


//CARREGAR AS ROTAS
const produtosRouter = require('./routes/produto')
const estoqueRouter = require("./routes/estoque")

//UTILIZANDO AS ROTAS 
     app.use('/produto' , produtosRouter)
     app.use('/estoque' , estoqueRouter)

//EXIBINDO INFORMAÇÕES NA TELA
    app.get("/",(req, res)=>{
       // res.send("<h1>Tudo Funcionando</h1>")
       res.render("home")

    })

//EXECULTANDO O SERVIDOR
app.listen(porta, ()=>{
    console.log("Servidor executando na porta ", porta)})







