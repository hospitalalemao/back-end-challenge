const AuthController = require('../controllers/auth.controller');

// module.exports = function(router, validateRoutes, validateAuth, validateContentType)
module.exports = function(router, validateRoutes,validateContentType, validateAuth)
{
    //authentication
    router.post('/auth/login', validateRoutes, validateContentType, AuthController.login);

    // Logout
    router.post('/auth/logout',validateAuth, AuthController.logout);
}