const axios = require('axios');
require('dotenv').config();

const getCoordinates = async (address) => {
  const response = axios.get('https://us1.locationiq.com/v1/search.php', {
    params: {
      format: 'json',
      key: process.env.LOCATIONIQ_TOKEN,
      q: address,
    },
  });

  console.log('response was');
  console.log(response);
};

module.exports = getCoordinates;
