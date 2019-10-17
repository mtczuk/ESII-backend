/* eslint-disable no-undef */
// disabled because of mocha

const { expect } = require('chai');
const request = require('request');
const axios = require('axios');
const { status } = require('../src/status');
const { correctUsers } = require('./dummy');

const baseUrl = 'http://127.0.0.1:8080/api';
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080/api',
});

it('invalid route', (done) => {
  request(`${baseUrl}/llaskjdf`, (err, res, body) => {
    const { httpStatus, apiStatus } = status.INVALID_ROUTE;
    const bodyObj = JSON.parse(body);

    expect(res.statusCode).to.equal(httpStatus);
    expect(bodyObj.httpStatus).to.equal(httpStatus);
    expect(bodyObj.apiStatus).to.equal(apiStatus);

    done();
  });
});

it('correct route with wrong method', (done) => {
  request.post(`${baseUrl}/user/3`, (err, res, body) => {
    const { httpStatus, apiStatus } = status.INVALID_ROUTE;
    const bodyObj = JSON.parse(body);

    expect(res.statusCode).to.equal(httpStatus);
    expect(bodyObj.httpStatus).to.equal(httpStatus);
    expect(bodyObj.apiStatus).to.equal(apiStatus);

    done();
  });
});

it('create user', (done) => {
  correctUsers.forEach((user) => {
    instance.post('/user', user).then((res) => {
      const { httpStatus, apiStatus } = status.CREATED;
      expect(res.data.apiStatus).to.equal(apiStatus);
      expect(res.data.httpStatus).to.equal(httpStatus);
      expect(res.status).of.equal(httpStatus);
      done();
    }).catch((err) => err);
  });
});
