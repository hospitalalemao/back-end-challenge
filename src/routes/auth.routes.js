const AuthController = require('../controllers/auth.controller');

// module.exports = function(router, validateRoutes, validateAuth, validateContentType)
module.exports = function(router, validateRoutes,validateContentType, validateAuth)
{
    /**
     * 
     * @api {post} /auth/login Login
     * @apiName Login
     * @apiGroup Authentication
     * @apiVersion  1.0.0
     * 
     * @apiHeader {String} x-web-access-token Web Token to start requests *required
     * @apiHeader {String} content-type json *required
     * 
     * @apiParam  {String} email 
     * @apiParam  {String} password
     * 
     * @apiSuccess (Response: 200) {Boolean} success Response Status 
     * @apiSuccess (Response: 200) {Object} data
     * @apiSuccess (Response: 200) {String} data.id User Id
     * @apiSuccess (Response: 200) {String} data.token JWT Token
     * @apiSuccess (Response: 200) {Number} errorNum Error number (only if success is equal false)
     * @apiSuccess (Response: 200) {String} error Description (only if success is equal false)
     *  
     * @apiSuccessExample {Object} Success-Response:
     * HTTP/1.1 200
     * {
     *     auth : true,
     *     token : "adsadafsda123...",
     * }
     * 
     * @apiErrorExample {Object} Error-Response:
     * HTTP/1.1 200
     * {
     *     success : false,
     *     errorNum : 1,
     *     error : "Failed to authenticate token.",
     * }
     * 
     */
    router.post('/auth/login', validateRoutes, validateContentType, AuthController.login);

    /**
     * 
     * @api {post} /auth/login Logout
     * @apiName Logout
     * @apiGroup Authentication
     * @apiVersion  1.0.0
     * 
     * @apiHeader {String} x-web-access-token Web Token to start requests *required
     * @apiHeader {String} content-type json *required
     * 
     * @apiParam  {String} email 
     * @apiParam  {String} password
     * 
     * @apiSuccess (Response: 200) {Boolean} success Response Status 
     * @apiSuccess (Response: 200) {Boolean} auth 
     * @apiSuccess (Response: 200) {String} token JWT Token
     * @apiSuccess (Response: 200) {Number} errorNum Error number (only if success is equal false)
     * @apiSuccess (Response: 200) {String} error Description (only if success is equal false)
     *  
     * @apiSuccessExample {Object} Success-Response:
     * HTTP/1.1 200
     * {
     *     auth : false,
     *     token : null,
     * }
     * 
     * @apiErrorExample {Object} Error-Response:
     * HTTP/1.1 200
     * {
     *     success : false,
     *     errorNum : 1,
     *     error : "Failed to authenticate token.",
     * }
     * 
     */
    router.post('/auth/logout',validateAuth, AuthController.logout);
}