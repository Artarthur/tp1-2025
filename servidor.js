const port = 8000

const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let votos = {
    Matematica:0,
    Portugues:0,
    Ciencias:0,
}
app.get("/", (req,res) => {
    res.render('form')
})

app.post("/voto", (req,res)=> {
   const voto  = req.body.voto

   if (votos.hasOwnProperty(voto)) {
    votos[voto]++;
}

})

app.listen(port, () =>{
    console.log('servidor funcioonando na porta: ${port} ')
})