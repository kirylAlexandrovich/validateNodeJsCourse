const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));

server.use('/', router);

module.exports = server;
