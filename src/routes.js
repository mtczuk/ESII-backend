const express = require('express');

const routes = express.Router();
const authMiddleware = require('./middlewares/auth.js');
const userController = require('./controllers/userController.js');
const authenticationController = require('./controllers/authenticationController');
// const interestController = require('./controllers/interestController.js');


routes.post('/user', userController.create);
routes.post('/authenticate', authenticationController.authenticate);

// routes.use(authMiddleware.tokenVerification); all routes get protected that way

routes.get('/', (req, res) => {
  res.send('testando');
});

// CRUD for Users
routes.get('/user', userController.view);
routes.get('/user/:id', userController.viewID);
routes.put('/user/:id', userController.update);
routes.delete('/user/:id', userController.delete);

// CRUD for Interest
// routes.get('/interest', interestController.view);
// routes.get('/interest/:id', interestController.viewID);

module.exports = routes;
