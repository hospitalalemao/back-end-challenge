
const router = require('express').Router();

module.exports = function(app, passport)
{
    router.get('/', (req, res)=>{ res.send('API Joubert Saquett') });

    app.use('/v1', router);
}