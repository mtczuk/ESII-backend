const jwt = require('jsonwebtoken');
const { status, sendError } = require('./status');
const User = require('./models/User');

const secret = 'testsecret'; // must be changed to process.env.SECRET later

/**
 * MIDDLEWARE
 * if a token was sent, tries to validate it
 */
const auth = async (req, res, next) => {
  const { token } = req.headers.authorization;

  if (!token) {
    next();
  }

  let data;
  try {
    data = jwt.verify(token, secret);
  } catch (e) {
    sendError(res, status.INVALID_TOKEN);
  }

  try {
    const user = await User.findOne({ where: { id: data.id } });
    req.user = user;
  } catch (e) {
    sendError(res, status.INVALID_TOKEN);
  }
};

/**
 * MIDDLEWARE
 * if user is not logged in, return FORBIDDEN error
 */
const protectRoute = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    const error = status.FORBIDDEN;
    res.status(error.httpStatus).send({
      httpStatus: error.httpStatus,
      apiStatus: error.apiStatus,
    });
  }
};

const generateToken = (id) => jwt.sign({ id }, secret);

module.exports = {
  auth,
  protectRoute,
  generateToken,
};
