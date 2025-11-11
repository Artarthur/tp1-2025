const express = require('express')
const app = express()
const port = 8080
app.use(express.urlencoded({extended:true }))

app.get('/', (request,response) => {
 response.send("Escreva /sobre para saber mais sobre o site, e /horaAtual para saber a hora atual")
})

app.get('/sobre', (req,response) =>{
 response.send(" Um site criado por Arthur Barcelos usando express")   
} )

app.get("/horaAtual", (req,res) => {
const date = new Date()
minutos = date.getMinutes()
horas = date.getHours()
segundos = date.getSeconds()
res.send(`São ${horas}:${minutos}:${segundos}`)    
})

console.log("fucionando na porta 8080")
app.listen(port)