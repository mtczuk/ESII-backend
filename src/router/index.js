const express = require('express');

const routes = express.Router();
const authMiddleware = require('../middlewares/auth');

const userRouter = require('./userRouter');
const authRouter = require('./authRouter');

routes.use('/authenticate', authRouter);
routes.use(authMiddleware);
routes.use('/user', userRouter);

module.exports = routes;
