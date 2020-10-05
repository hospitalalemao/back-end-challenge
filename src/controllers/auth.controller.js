const Debug = require('debug')('user:controller');
let response = require('../helpers/response.helpers');
const constants = require('../config/constants');
let jwt = require('jsonwebtoken');

exports.healthCheck = function(req, res)
{
    res.status(200).send({success:true});
}

exports.login = async function(req, res) {
    // Usuário e senha precisam ser iguals a email:joubert e senha:123
    if(req.body.email === 'joubert' && req.body.password === '123'){
        //resultado do banco de dados
        const id = 1; 
        // Criar um token com time de expiração
        let token = jwt.sign({ id }, constants.jwt_secret, {
            expiresIn: 300 * 30 // expires
        });
        return res.json({ auth: true, token: token });
    }
    res.status(500).json({message: 'Login inválido!'});
}

exports.logout = async function(req, res) {
    res.json({ auth: false, token: null });
}

exports.validateAuth =  function(req, res, next){
    // Valida se existe um token
    let token = req.headers['authorization'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    // pega somente o token sem o 'Bearer '
    token = token.split("Bearer ")[1];

    // Valida se o token ainda é valido
    jwt.verify(token, constants.jwt_secret, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        // id do banco no caso  
        req.userId = decoded.id;
        next();
    });
}

exports.validateRoutes = function(req, res, next)
{
    // token necessário para segurança de rotas sem autenticação
    let webtoken = req.headers['x-web-access-token'];
    if(!webtoken || webtoken != constants.webtoken)
        res.status(403).send("");
    else
        next();
}

exports.validateContentType = function(req, res, next)
{
    // Validar se o conteúdo que está sendo enviado é JSON
    let contentType = req.headers['content-type'];
    if(!contentType || contentType.toLowerCase() != "application/json")
        return response.json(res,400,{success:false,error : 'Content-type is not json'});
    else
        next();
}

exports.denyRoutes = function(req, res)
{
    res.status(403).send("");
}
