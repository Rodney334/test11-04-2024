//IMPORTATION DES MODULES 
const express = require("express")
const mysql2 = require("mysql2")
///////////////////////////////////

const productController = require('./controllers/productController');

//CREATION D'UNE APPLICATION EXPRESS
const app = express()
////////////////////////////////////

//CONFIGURATION APPLICATION EXPRESS
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
////////////////////////////////////////////////////////


app.get("/", (req, res, next) => {
    console.log("Nous sommes sur la route par défaut")
    res.status(200).json({message: "Default route"})
})

app.get('/product', productController.index);

//ECOUTER L'APPLICATION
const port = 8080
app.listen(port, () => {
    console.log(`run on port : ${port} url : http://localhost:${port}`)
})
///////////////////////////////////////////////////