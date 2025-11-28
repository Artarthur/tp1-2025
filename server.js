const port =8880
const express= require("express")
const app = express()  
app.set('view engine', 'ejs');

app.get("/",(req,res) => {
    res.send("digite /formulario para abrir o formulario")
})
app.get("/formulario",(req,res) => {
res.render("formulario")
})

app.get("/resposta",(req,res) => {
nome = req.query.nomezinho ,sobrenome = req.query.sobrenome ,cidade = req.query.cidade
    res.render("resposta", {nome,sobrenome,cidade} )
})



app.listen(port, ()=> {
    console.log('funciona')
})