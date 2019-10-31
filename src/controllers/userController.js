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
  async view(request, response) {
    const users = await User.findAll();
    return response.json(users);
  },

  async viewID(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);

    return response.json(user);
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
      }); // TODO: change this response
    } catch (e) {
      return sendError(response, status.BAD_REQUEST); // for now assume it's always bad request
    }
  },

  async update(request, response) {
    const { id } = request.params;
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
    await User.destroy({ where: { id } });

    response.sendStatus(200);
  },
};
