const status = require('./status');

// const secret = 'testsecret'; // must be changed to process.env.SECRET later

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

module.exports = {
  protectRoute,
};
