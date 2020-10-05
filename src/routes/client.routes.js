const ClientsController = require('../controllers/clients.controller');

// module.exports = function(router, validateRoutes, validateAuth,validateContentType)
module.exports = function(router, validateRoutes, validateContentType, validateAuth)
{
    /**
     * 
     * @api {get} /client List All
     * @apiName List All
     * @apiGroup Client
     * @apiVersion  1.0.0
     * 
     * @apiHeader {String} x-web-access-token Web Token to start requests *required
     * @apiHeader {String} content-type json *required
     * 
     * 
     * @apiSuccess (Response: 200) {Boolean} success Response Status 
     * @apiSuccess (Response: 200) {Array} data 
     * @apiSuccess (Response: 200) {Number} data.id Id Client
     * @apiSuccess (Response: 200) {String} nome Name Client
     * @apiSuccess (Response: 200) {String} dataNascimento Client's date of birth
     * @apiSuccess (Response: 200) {String} email Client's Email
     * @apiSuccess (Response: 200) {String} cpf Client's CPF
     * @apiSuccess (Response: 200) {Number} address_id the record id (address) of the address table
     *  
     * @apiSuccessExample {Object} Success-Response:
     * HTTP/1.1 200
     * {
     *     success : false,
     *     data : [
                {
                    "id": 2,
                    "nome": "Nome da Pessoa",
                    "dataNascimento": "0000-00-00",
                    "email": "emailteste@12345.com.br",
                    "cpf": '123456',
                    "address_id": 2
                },
     *      ],
     * }
     * 
     * @apiErrorExample {Object} Error-Response:
     * HTTP/1.1 200
     * {
     *     success : false,
     *     errorNum : 1,
     *     error : "Description",
     * }
     * 
     */
    router.get('/client', validateRoutes, validateAuth, ClientsController.listAll);


    
    /**
     * 
     * @api {get} /client/:clientId List by ID
     * @apiName List by ID
     * @apiGroup Client
     * @apiVersion  1.0.0
     * 
     * @apiHeader {String} x-web-access-token Web Token to start requests *required
     * @apiHeader {String} content-type json *required
     * 
     * 
     * @apiSuccess (Response: 200) {Boolean} success Response Status 
     * @apiSuccess (Response: 200) {Array} data 
     * @apiSuccess (Response: 200) {Number} data.id Id Client
     * @apiSuccess (Response: 200) {String} nome Name Client
     * @apiSuccess (Response: 200) {String} dataNascimento Client's date of birth
     * @apiSuccess (Response: 200) {String} email Client's Email
     * @apiSuccess (Response: 200) {String} cpf Client's CPF
     * @apiSuccess (Response: 200) {Number} address_id the record id (address) of the address table
     *  
     * @apiSuccessExample {Object} Success-Response:
     * HTTP/1.1 200
     * {
     *     success : false,
     *     data : [
                {
                    "id": 2,
                    "nome": "Nome da Pessoa",
                    "dataNascimento": "0000-00-00",
                    "email": "emailteste@12345.com.br",
                    "cpf": '123456',
                    "address_id": 2
                }
     *      ],
     * }
     * 
     * @apiErrorExample {Object} Error-Response:
     * HTTP/1.1 200
     * {
     *     success : false,
     *     errorNum : 1,
     *     error : "Description",
     * }
     * 
     */
    router.get('/client/:clientId', validateRoutes, validateAuth, ClientsController.listById);
    
    /**
     * 
     * @api {get} /client/address/:clientId List with address
     * @apiName List with address
     * @apiGroup Client
     * @apiVersion  1.0.0
     * 
     * @apiHeader {String} x-web-access-token Web Token to start requests *required
     * @apiHeader {String} content-type json *required
     * 
     * 
     * @apiSuccess (Response: 200) {Boolean} success Response Status 
     * @apiSuccess (Response: 200) {Array} data 
     * @apiSuccess (Response: 200) {Number} data.id Id Client
     * @apiSuccess (Response: 200) {String} nome Name Client
     * @apiSuccess (Response: 200) {String} dataNascimento Client's date of birth
     * @apiSuccess (Response: 200) {String} email Client's Email
     * @apiSuccess (Response: 200) {String} cpf Client's CPF
     * @apiSuccess (Response: 200) {Number} address_id The record id (address) of the address table
     * @apiSuccess (Response: 200) {String} rua Street name
     * @apiSuccess (Response: 200) {Number} numero Street number home
     * @apiSuccess (Response: 200) {String} bairro Neighborhood
     * @apiSuccess (Response: 200) {String} cidade City
     * @apiSuccess (Response: 200) {String} estado State
     * @apiSuccess (Response: 200) {Numer} cep CEP
     *  
     * @apiSuccessExample {Object} Success-Response:
     * HTTP/1.1 200
     * {
     *     success : false,
     *     "data": [
                {
                    "id": 1,
                    "nome": "Nome da Pessoa",
                    "dataNascimento": "0000-00-00",
                    "email": "emailteste@12345.com.br",
                    "cpf": 0,
                    "address_id": 1,
                    "rua": "Rua Dom Jose",
                    "numero": 1234,
                    "bairro": "Bairro Jd Tatira",
                    "cidade": "São Paulo",
                    "estado": "SP",
                    "cep": 0
                }
            ]
     * }
     * 
     * @apiErrorExample {Object} Error-Response:
     * HTTP/1.1 200
     * {
     *     success : false,
     *     errorNum : 1,
     *     error : "Description",
     * }
     * 
     */
    router.get('/client/address/:clientId', validateRoutes, validateAuth, ClientsController.listClientAddress);

    
    /**
     * 
     * @api {post} /client Create Client
     * @apiName new Client
     * @apiGroup Client
     * @apiVersion  1.0.0
     * 
     * @apiHeader {String} x-web-access-token Web Token to start requests *required
     * @apiHeader {String} content-type json *required
     * 
     * @apiParam  {String} nome 
     * @apiParam  {String} dataNascimento
     * @apiParam  {String} email
     * @apiParam  {String} cpf
     * @apiParam  {Object} endereco
     * @apiParam  {String} endereco.rua
     * @apiParam  {Number} endereco.numero
     * @apiParam  {String} endereco.bairro
     * @apiParam  {String} endereco.cidade
     * @apiParam  {String} endereco.estado
     * @apiParam  {String} endereco.cep
     * 
     * @apiSuccess (Response: 200) {Boolean} success Response Status 
     * @apiSuccess (Response: 200) {Array} data 
     * @apiSuccess (Response: 200) {Object} address Object with data about the insert made in the database
     * @apiSuccess (Response: 200) {Object} address Object with data about the insert made in the database
     *  
     * @apiSuccessExample {Object} Success-Response:
     * HTTP/1.1 200
     * {
            "success": true,
            "data": {
                "address": {
                    "fieldCount": 0,
                    "affectedRows": 1,
                    "insertId": 16,
                    "changedRows": 0,
                    "data": {
                        "fieldCount": 0,
                        "affectedRows": 1,
                        "insertId": 16,
                        "serverStatus": 2,
                        "warningCount": 0,
                        "message": "",
                        "protocol41": true,
                        "changedRows": 0
                    }
                },
                "client": {
                    "fieldCount": 0,
                    "affectedRows": 1,
                    "insertId": 29,
                    "changedRows": 0,
                    "data": {
                        "fieldCount": 0,
                        "affectedRows": 1,
                        "insertId": 29,
                        "serverStatus": 2,
                        "warningCount": 1,
                        "message": "",
                        "protocol41": true,
                        "changedRows": 0
                    }
                }
            }
        }
     * 
     * @apiErrorExample {Object} Error-Response:
     * HTTP/1.1 200
     * {
     *     success : false,
     *     errorNum : 1,
     *     error : "Description",
     * }
     * 
     */
    router.post('/client', validateRoutes, validateAuth,validateContentType, ClientsController.create);

    
    /**
     * 
     * @api {patch} /client/update/:clientId Alter Client
     * @apiName Update Client
     * @apiGroup Client
     * @apiVersion  1.0.0
     * 
     * @apiHeader {String} x-web-access-token Web Token to start requests *required
     * @apiHeader {String} content-type json *required
     * 
     * @apiParam  {String} nome 
     * @apiParam  {String} dataNascimento
     * @apiParam  {String} email
     * @apiParam  {String} cpf
     * @apiParam  {Object} endereco
     * @apiParam  {String} endereco.rua
     * @apiParam  {Number} endereco.numero
     * @apiParam  {String} endereco.bairro
     * @apiParam  {String} endereco.cidade
     * @apiParam  {String} endereco.estado
     * @apiParam  {String} endereco.cep
     * 
     * @apiSuccess (Response: 200) {Boolean} success Response Status 
     * @apiSuccess (Response: 200) {Array} data 
     * @apiSuccess (Response: 200) {Object} address Object with data about the insert made in the database
     * @apiSuccess (Response: 200) {Object} address Object with data about the insert made in the database
     *  
     * @apiSuccessExample {Object} Success-Response:
     * HTTP/1.1 200
     * {
            "success": true,
            "data": {
                "address": {
                    "fieldCount": 0,
                    "affectedRows": 1,
                    "insertId": 16,
                    "changedRows": 0,
                    "data": {
                        "fieldCount": 0,
                        "affectedRows": 1,
                        "insertId": 16,
                        "serverStatus": 2,
                        "warningCount": 0,
                        "message": "",
                        "protocol41": true,
                        "changedRows": 0
                    }
                },
                "client": {
                    "fieldCount": 0,
                    "affectedRows": 1,
                    "insertId": 29,
                    "changedRows": 0,
                    "data": {
                        "fieldCount": 0,
                        "affectedRows": 1,
                        "insertId": 29,
                        "serverStatus": 2,
                        "warningCount": 1,
                        "message": "",
                        "protocol41": true,
                        "changedRows": 0
                    }
                }
            }
        }
     * 
     * @apiErrorExample {Object} Error-Response:
     * HTTP/1.1 200
     * {
     *     success : false,
     *     errorNum : 1,
     *     error : "Description",
     * }
     * 
     */
    router.patch('/client/update/:clientId', validateRoutes, validateAuth, validateContentType, ClientsController.update);


    
    /**
     * 
     * @api {delete} /client/delete/:clientId Delete Client
     * @apiName DeleteClient
     * @apiGroup Client
     * @apiVersion  1.0.0
     * 
     * 
     * @apiHeader {String} x-web-access-token Web Token to start requests
     * @apiHeader {String} Authorization JWT Token (ex: Bearer token)
     *   
     * @apiParam (url) {String} :clientId 
     * 
     * @apiSuccess (Response: 200) {Boolean} success Response Status
     * 
     * @apiSuccessExample {Object} Success-Response:
     * HTTP/1.1 200
     * {
     *   success: true
     * }
     * 
     */
    router.delete('/client/delete/:clientId', validateRoutes, validateAuth, ClientsController.deleteClienteAddress);
}