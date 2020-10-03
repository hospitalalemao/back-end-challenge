
const router = require('express').Router();
const ClientsController = require('../controllers/clients.controller');

module.exports = function(app, passport)
{
    
    router.get('/client', ClientsController.listAll);
    router.get('/client/:clientId', ClientsController.listById);
    router.get('/client/address/:clientId', ClientsController.listClientAddress);
    router.post('/client', ClientsController.create);
    router.patch('/client/update/:clientId', ClientsController.update);
    router.delete('/client/:clientId', ClientsController.deleteClienteAddress);
    
    router.get('/', (req, res)=>{ res.send('API Joubert Saquett') });

    app.use('/v1', router);
}