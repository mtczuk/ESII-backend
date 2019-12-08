const express = require('express');
const { User } = require('../models');
const { status, sendError } = require('../status');
const auth = require('../middlewares/auth');

const router = express.Router();

router.use(auth);

const userFields = (user) => ({
  name: user.name,
  email: user.email,
  phone: user.phone,
  radius: user.radius,
  street: user.street,
  number_home: user.number_home,
  complement: user.complement,
  neighbourhood: user.neighbourhood,
  city: user.city,
  postal_code: user.postal_code,
});

router.get('/', async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);

    if (user === null) {
      sendError(req, status.NOT_FOUND);
    }
    return res.json(user);
  } catch (e) {
    return sendError(req, status.SERVER_ERROR);
  }
});

router.put('/', async (req, res) => {
  try {
    const fields = userFields(req.body);
    const user = await User.findOne({ where: { id: req.userId } });

    user.update(fields);

    const { httpStatus, apiStatus } = status.CREATED;
    return res.status(httpStatus).send({
      httpStatus,
      apiStatus,
    });
  } catch (e) {
    return sendError(res, status.BAD_REQUEST);
  }
});

router.delete('/', async (request, response) => {
  try {
    await User.destroy({ where: { id: request.userId } });

    return response.sendStatus(status.OK);
  } catch (e) {
    return sendError(response, status.SERVER_ERROR);
  }
});

module.exports = router;
