
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