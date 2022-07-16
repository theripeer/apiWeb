const express = require("express")
const bodyParser = require("body-parser")

const app = express();
const {API_VERSION} = require('./config');

//LOAD ROUTINGS
//...

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CONFIGURAR HEADER HTTP
//...

//ROUTER BASIC
//...


module.exports = app;
