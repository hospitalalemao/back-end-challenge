
const Crud = require('./controllers/db.controller.js');
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
    const db_ = new Crud();
    
    Debug('Iniciando API');
    let corsOptions = 
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

    /** Start Routes */
    Debug('Iniciando ROTAS');
    require('./routes/routes.js')(app, passport); 

    /*** Start Application  */
    app.application = app.listen(port,host);
    Debug('Rodando em http://'+host+':' + port);

    /**** Header Rewrite ****/
    app.disable('x-powered-by');
}