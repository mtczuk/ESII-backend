/**
 * Data to test the API
 */

// Users with all fields filled correctly
const correctUsers = [{
  name: 'George',
  email: 'george@mail.com',
  password: '123',
  phone: '112312',
  radius: 10,
  street: 'street',
  number_home: 943,
  complement: 'E',
  neighbourhood: 'brooklyn',
  city: 'new york',
  postal_code: '912939',
}];

const usersWithMissingFields = [{
  email: 'george@mail.com', // no name
  password: '123',
  phone: '112312',
  radius: 10,
  street: 'street',
  number_home: 943,
  complement: 'E',
  neighbourhood: 'brooklyn',
  city: 'new york',
  postal_code: '912939',
}, {
  name: 'George',
  password: '123', // no email
  phone: '112312',
  radius: 10,
  street: 'street',
  number_home: 943,
  complement: 'E',
  neighbourhood: 'brooklyn',
  city: 'new york',
  postal_code: '912939',
}];

module.exports = {
  correctUsers,
  usersWithMissingFields,
};
