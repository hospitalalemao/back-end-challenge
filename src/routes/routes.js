
const router = require('express').Router();
const AuthController = require('../controllers/auth.controller');

module.exports = function(app, passport)
{
    

    /**
     * 
     * @api / 1. Install
     * @apiName Install
     * @apiGroup Install
     * @apiVersion  1.0.0
     * 
     * 
     * @apiDescription Técnologias usadas:  body-parser, cors, debug, dotenv, express, helmet, jsonwebtoken, mysql, nodemon, passport, uuid, apiDoc.
     * A instalação acontece automáticamente, basta ter um banco de dados (challenge_joubert) setado no arquivo .env na raiz do projeto, as tabelas serão criadas automáticamente.
     * Na pasta POSTMAN, existem os arquivos para maninupalão da API.
     * 
     */
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