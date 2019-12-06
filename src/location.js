const axios = require('axios');
require('dotenv').config();

/**
 * @param address: String
 * @param userLat: String | Number
 * @param userLon: String | Number
 *
 * @returns {latitude: String, longitude: String, found: bool}
 */
const getCoordinates = async (address, userLat, userLon) => {
  userLat = Number(userLat);
  userLon = Number(userLon);

  try {
    const response = await axios.get('https://us1.locationiq.com/v1/search.php', {
      params: {
        format: 'json',
        key: process.env.LOCATIONIQ_TOKEN,
        q: address,
      },
    });

    console.log('response was');
    const data = response.data[0];
    console.log('--------')

    return {
      latitude: data.lat,
      longitude: data.lon,
      coord: `${data.lat}, ${data.lon}`,
      found: true,
    };
  } catch (e) {
    return { found: false };
  }
};

module.exports = { getCoordinates };
