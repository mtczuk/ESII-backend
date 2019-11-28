const express = require('express');

// const passport = require('./passport');

const routes = express.Router();
const authMiddleware = require('./middlewares/auth');
const userController = require('./controllers/userController.js');
const authenticationController = require('./controllers/authenticationController');

routes.post('/authenticate', authenticationController.authenticate);

routes.use(authMiddleware);

// CRUD for Users
routes.get('/user', userController.viewID);
routes.put('/user', userController.update);
routes.delete('/user', userController.delete);

module.exports = routes;
