/* eslint-disable no-undef */
const { expect } = require('chai');
const { status } = require('../src/status');

it('status key equals apiStatus', (done) => {
  Object.keys(status).forEach((key) => {
    expect(key).to.equal(status[key].apiStatus);
  });
  done();
});
