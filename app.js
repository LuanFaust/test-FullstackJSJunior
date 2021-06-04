const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json()); //json  de entrada no body

require('./controllers/routers')(app);

app.listen(8081,() => {
    console.log(`Servidor rodando na porta`,8081)
  });