const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express


app.get("/", function(_, res){
    res.send("<h1>Lista de Clientes</h1>");
})

app.get("/lista_clientes/:nome", function(req, res){
    res.send("<h1> Cliente Identificado: " + req.params.nome + " </h1>");
})

app.get("/novo_cliente/:nome?", function(req, res){
    var nome = req.params.nome

    if (nome){
        res.send("Novo Cliente Inserido: " + nome)
    }else{
        res.send("Precisa inserir o nome para cadastrar")
    }
})

app.listen(process.env.PORT = 5000,function(erro){  
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
