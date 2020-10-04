
    /**
     * 
     * @api / Install
     * @apiName Instructions
     * @apiGroup 1. Instructions
     * @apiVersion  1.0.0
     * 
     * 
     * @apiDescription Técnologias usadas:  express, body-parser, cors, debug, dotenv, helmet, jsonwebtoken, mysql, nodemon, passport, uuid, apiDoc.
     * 
     * A instalação acontece automáticamente, basta ter um banco de dados (challenge_joubert) setado no arquivo '.env' que esta na raiz do projeto, as tabelas serão criadas automáticamente.
     * 
     * Na pasta OTHERS/POSTMAN, existem os arquivos para maninupalão da API.
     * 
     * Foi desenvolvido somente 1 endpoint devido ao tempo, assim podendo focar em itens como documentação e autenticação jwt.
     * 
     * --Api em Lumen acabei colocando dentro da pasta OTHERS/LUMEN/, ela não possue nenhuma lógica de service ou model, somente as rotas.
     */

const router = require('express').Router();
const AuthController = require('../controllers/auth.controller');

module.exports = function(app, passport)
{
    

    const validateRoutes = [
        AuthController.validateRoutes
    ]; 
    
    const validateAuth = [
        AuthController.validateRoutes,
        AuthController.validateAuth,
        
    ];
    const validateContentType = [
        AuthController.validateContentType,
    ];
    
    // Auth routes
    require('./auth.routes')(router, validateRoutes, validateContentType, validateAuth);

    // Client routes
    require('./client.routes')(router, validateRoutes, validateContentType, validateAuth);

    router.get('/', validateRoutes, (req, res)=>{ res.send('API Joubert Saquett') });
    app.use('/v1', router);
    app.use(AuthController.validateRoutes);  
    app.use(AuthController.denyRoutes);  

}