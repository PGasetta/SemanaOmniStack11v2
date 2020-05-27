const express = require('express');
const cors = require('cors');

//importando as rotas -> o uso do ./ é pra dizer que não é um pacote e sim um arquivo
const routes = require('./routes');

const app = express();

//DESENV -->> //ASSIM TODAS AS APLICAÇÕES FRONTEND PODE ACESSAR
app.use(cors()); 
//PRODUÇÃO  -->> //ASSIM SOMENTES AS APLICAÇÕES FRONTEND HOSPEDADAS EM http://meuapp.com PODEM ACESSAR
/*
app.use(cors({
    origin: 'http://meuapp.com'
}));
*/
//definindo que será recebido json nas requisições
app.use(express.json());
app.use(routes);

app.listen(3333);