const express = require('express');

const routes = express.Router();
const userController = require('./controllers/userController.js');
// const interestController = require('./controllers/interestController.js');

routes.get('/', (req, res) => {
  res.send('testando');
});

// CRUD for Users
routes.get('/user', userController.view);
routes.get('/user/:id', userController.viewID);
routes.post('/user', userController.create);
routes.put('/user/:id', userController.update);
routes.delete('/user/:id', userController.delete);

// CRUD for Interest
// routes.get('/interest', interestController.view);
// routes.get('/interest/:id', interestController.viewID);

module.exports = routes;
