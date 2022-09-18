const express = require('express');
const server = express.Router();
const hellow = require('../../contollers/hellow.contollers');

server.route('/').get(hellow);

module.exports = server;
