let express = require('express');
require('dotenv').config();

let app = express();
let host = process.env.HOST || "127.0.0.1";
let port = process.env.PORT || 8044;

require('./src/bootstrap.js')(app,host,port,__dirname);