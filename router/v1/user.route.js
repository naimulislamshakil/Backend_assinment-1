const server = require('express').Router();
const userContoller = require('../../contollers/user.contoller');

module.exports.allUser = server.get('/all', userContoller.allUserContoller);
