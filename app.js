//conceito de rotas usando o express
const express = require("express")
const app = express()

app.listen(8081, function(){ 
    console.log("Servidor Ativo!") 
})

app.get("/", function(req, res){ 
    res.end("Node JS")
})

app.get("/cadastrar/:item/:quantidade", function(req, res){ //req = requisição -- res = resposta
    res.send("Item: " + req.params.item + "<br>Quantidade: " + req.params.quantidade)
})

app.get("/contato", function(req, res){
    res.end("Página de Contato")
})

app.get("/professor", function(req, res){
    res.end("Página de Professor capeta")
})

app.get("/alunos", function(req, res){
    res.end("Página de Alunos")
})