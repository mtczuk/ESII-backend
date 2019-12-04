const express = require('express');

// const passport = require('./passport');

const routes = express.Router();
const authMiddleware = require('../middlewares/auth');
const authenticationController = require('../controllers/authenticationController');

const userRouter = require('./userRouter');

routes.post('/authenticate', authenticationController.authenticate);

routes.use(authMiddleware);
routes.use('/user', userRouter);

module.exports = routes;
