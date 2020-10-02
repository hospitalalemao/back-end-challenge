const bodyParser = require('body-parser');
const helmet = require('helmet');
const passport = require('passport');
const cors = require('cors');
const Debug = require('debug')('bootstrap');
const express = require('express');
const session = require('express-session');
const path = require('path');
const router = require('express').Router();

module.exports = function(app,host,port,rootDir)
{
    var corsOptions = 
    {
        origin: ["http://localhost:4200"],
        allowedHeaders : ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "x-web-access-token"],
        credentials : true,
        optionsSuccessStatus : 200
    }
    Debug('Definindo CORS da aplicação');
    app.use(cors(corsOptions));

    /*****Body Parser ******/
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    /*** Security ***/
    Debug('Aplicando HELMET para segurança');
    app.use(helmet());


    Debug('Iniciando ROTAS');
    router.get('/', (req, res)=>{ res.send('API Joubert Saquett') });    
    app.use('/v1', router);

    /*** Start Application  */
    app.application = app.listen(port,host);
    Debug('Rodando em http://'+host+':' + port);
}