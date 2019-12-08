const express = require('express');

const routes = express.Router();
const authMiddleware = require('../middlewares/auth');

const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const eventRouter = require('./eventRouter');

routes.use('/authenticate', authRouter);
routes.use('/user', userRouter);
routes.use('/event', eventRouter);

module.exports = routes;
