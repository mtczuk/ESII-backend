const status = {
  OK: {
    apiStatus: 'OK',
    httpStatus: 200,
  },
  CREATED: {
    apiStatus: 'CREATED',
    httpStatus: 201,
  },
  USER_DOES_NOT_EXIST: {
    apiStatus: 'USER_DOES_NOT_EXIST',
    httpStatus: 401,
  },
  WRONG_PASSWORD: {
    apiStatus: 'WRONG_PASSWORD',
    httpStatus: 401,
  },
  INVALID_TOKEN: {
    apiStatus: 'INVALID_TOKEN',
    httpStatus: 401,
  },
  FORBIDDEN: {
    apiStatus: 'FORBIDDEN',
    httpStatus: 403,
  },
  NOT_FOUND: {
    apiStatus: 'NOT_FOUND',
    httpStatus: 404,
  },
  SERVER_ERROR: {
    apiStatus: 'SERVER_ERROR',
    httpStatus: 500,
  },
};

const sendError = (res, error) => {
  res.status(error.httpStatus).send({
    apiStatus: error.apiStatus,
    httpStatus: error.httpStatus,
  });
};

module.exports = {
  status,
  sendError,
};
