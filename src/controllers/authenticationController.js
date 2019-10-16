const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { status, sendError } = require('../status');

const secret = 'testsecret'; // must be changed to process.env.SECRET later

module.exports = {
  async authenticate(request, response) {
    const { email, password } = request.body;

    try {
      const user = await User.findOne({ where: { email, password } });

      if (!user) {
        return sendError(response, status.USER_DOES_NOT_EXIST);
      }

      const { id } = user;

      const token = await jwt.sign({ id }, secret);

      return response.json({
        user,
        token,
      });
    } catch (err) {
      return sendError(response, status.WRONG_PASSWORD);
    }
  },
};
