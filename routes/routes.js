const express = require('express');
const routes = express.Router();

const c = require('../controller/EmbsController');

// Define routes and map them to the controller methods
routes.get('/', c.index);
routes.get('/about', c.about);
routes.get('/contact', c.contact);
routes.get('/services', c.services);
routes.get('/help', c.help);

module.exports = routes;
