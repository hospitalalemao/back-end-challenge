const ClientsController = require('../controllers/clients.controller');

// module.exports = function(router, validateRoutes, validateAuth,validateContentType)
module.exports = function(router, validateRoutes, validateContentType, validateAuth)
{
    router.get('/client', validateRoutes, validateAuth, ClientsController.listAll);
    router.get('/client/:clientId', validateRoutes, validateAuth, ClientsController.listById);
    router.get('/client/address/:clientId', validateRoutes, validateAuth, ClientsController.listClientAddress);
    router.post('/client', validateRoutes, validateAuth,validateContentType, ClientsController.create);
    router.patch('/client/update/:clientId', validateRoutes, validateAuth, validateContentType, ClientsController.update);
    router.delete('/client/:clientId', validateRoutes, validateAuth, ClientsController.deleteClienteAddress);
}