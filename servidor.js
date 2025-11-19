const port = 8000

const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let votos = {
    Carapebus:0,
    Quissama:0,
    Macae:0,
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

app.get("/conclusao",(res,req)=> {
    const total = votos.Carapebus + votos.Macae + votos.Quissama

    res.render("conclusao",{
        votos: votos,
        total: total
    })

})

app.get("/reiniciar",(res,req)=>{
    votos = {
        Carapebus:0,
        Quissama:0,
        Macae:0,
    }
})

app.use((req, res, next) => {
    res.status(404).send("<h1>Página não encontrada.</h1>");
});
app.listen(port, () =>{
    console.log('servidor funcioonando na porta: ${port} ')
})
