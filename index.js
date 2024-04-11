//IMPORTATION DES MODULES 
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
///////////////////////////////////

const productController = require('./controllers/productController');

//CREATION D'UNE APPLICATION EXPRESS
const app = express()
////////////////////////////////////

//CONFIGURATION APPLICATION EXPRESS
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', './templates');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
////////////////////////////////////////////////////////


app.get("/", (req, res, next) => {
    console.log("Nous sommes sur la route par défaut")
    res.status(200).json({message: "Default route"})
})

app.get('/product', productController.index);
app.get('/product/new', productController.new);
app.post('/product', productController.create);
app.get('/product/edit/:id', productController.edit);
app.post('/product/edit/:id', productController.update);
app.get('/product/delete/:id', productController.delete); 

//ECOUTER L'APPLICATION
const port = 8080
app.listen(port, () => {
    console.log(`run on port : ${port} url : http://localhost:${port}`)
})
///////////////////////////////////////////////////