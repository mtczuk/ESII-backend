const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { status, sendError } = require('../status');

const secret = 'testsecret'; // must be changed to process.env.SECRET later
const generateToken = (id) => jwt.sign({ id }, secret);

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

module.exports = {
  async viewID(request, response) {
    try {
      const user = await User.findByPk(request.userId);

      if (user === null) {
        sendError(request, status.NOT_FOUND);
      }
      return response.json(user);
    } catch (e) {
      return sendError(request, status.SERVER_ERROR);
    }
  },

  async create(request, response) {
    const user = request.body;

    try {
      const userCreate = await User.create(user);

      const { id } = userCreate.dataValues;
      const { apiStatus, httpStatus } = status.CREATED;
      const token = generateToken(id);

      return response.status(httpStatus).send({
        httpStatus,
        apiStatus,
        token,
        id,
      }); // TODO: change this response
    } catch (e) {
      console.log(e);
      return sendError(response, status.BAD_REQUEST); // for now assume it's always bad request
    }
  },

  async update(request, response) {
    const { id } = request.params;

    if (request.userId !== Number(id)) {
      return sendError(response, status.FORBIDDEN);
    }

    const fields = userFields(request.body);
    const user = await User.findOne({ where: { id } });

    try {
      user.update(fields);

      const { httpStatus, apiStatus } = status.CREATED;
      return response.status(httpStatus).send({
        httpStatus,
        apiStatus,
      });
    } catch (e) {
      return sendError(response, status.BAD_REQUEST);
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    if (request.userId !== Number(id)) {
      return sendError(response, status.FORBIDDEN);
    }

    await User.destroy({ where: { id } });

    return response.sendStatus(200);
  },
};
