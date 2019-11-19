const jwt = require('jsonwebtoken');
const { status, sendError } = require('../status');

const secret = 'testsecret'; // must be changed to process.env.SECRET later

/**
 * MIDDLEWARE
 * if a authHeader was sent, tries to validate it
 */
module.exports = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return sendError(response, status.INVALID_TOKEN);
  }

  const token = authHeader.split(' ')[1];

  let data;
  try {
    data = jwt.verify(token, secret);
  } catch (e) {
    return sendError(response, status.INVALID_TOKEN);
  }

  const { id } = data;
  request.userId = id;

  return next();
};
