const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const { User } = require('../models');
const { status, sendError } = require('../status');
require('dotenv').config();

const router = express.Router();
const secret = 'testsecret'; // must be changed to process.env.SECRET later

router.post('/', async (request, response) => {
  const fbToken = request.headers.fbtoken;

  console.log('fbtoken is');
  console.log(fbToken);

  if (fbToken) {
    let data;
    try {
      const res = await axios.get('https://graph.facebook.com/v5.0/me', {
        params: {
          access_token: fbToken,
          fields: 'name,email',
        },
      });
      data = res.data;
    } catch (e) {
      return sendError(response, status.BAD_REQUEST);
    }

    if (!data.email) {
      sendError(response, status.BAD_REQUEST);
    }

    let user;
    try {
      user = await User.findOne({ where: { email: data.email } });
      if (user === null) {
        user = await User.create({
          name: data.name,
          email: data.email,
        });
      }
    } catch (e) {
      console.log('SERVER ERROR!!!!');
      console.log(user);
      console.log('error is');
      console.log(e);
      return sendError(response, status.SERVER_ERROR);
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET || secret);

    return response.json({ token });
  }

  return sendError(response, status.BAD_REQUEST);
});

module.exports = router;
