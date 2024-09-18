const express = require('express');
const routes = express.Router();
const c = require('../controller/EmbsController');
routes.get('/', c.index);

module.exports = routes;