const { User } = require('../models');
const { status, sendError } = require('../status');

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

  async update(request, response) {
    try {
      const fields = userFields(request.body);
      const user = await User.findOne({ where: { id: request.userId } });

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
    try {
      await User.destroy({ where: { id: request.userId } });

      return response.sendStatus(status.OK);
    } catch (e) {
      return sendError(response, status.SERVER_ERROR);
    }
  },
};
