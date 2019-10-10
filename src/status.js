const status = {
  OK: {
    name: 'OK',
    http: 200,
  },
  CREATED: {
    name: 'CREATED',
    http: 201,
  },
  USER_DOES_NOT_EXIST: {
    name: 'USER_DOES_NOT_EXIST',
    http: 401,
  },
  WRONG_PASSWORD: {
    name: 'WRONG_PASSWORD',
    http: 401,
  },
  INVALID_TOKEN: {
    name: 'INVALID_TOKEN',
    http: 401,
  },
  FORBIDDEN: {
    name: 'FORBIDDEN',
    http: 403,
  },
  NOT_FOUND: {
    name: 'NOT_FOUND',
    http: 404,
  },
  SERVER_ERROR: {
    name: 'SERVER_ERROR',
    http: 500,
  },
};

module.exports = status;
