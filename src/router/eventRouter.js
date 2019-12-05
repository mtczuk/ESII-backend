const express = require('express');
const { Event } = require('../models');
const { status, sendError } = require('../status');

const router = express.Router();

const delim = ',';

router.get('/', async (req, res) => {
  const {
    latitude,
    longitude,
    radius,
    city,
    categories,
  } = req.query;

  const filterObj = {};
  filterObj.categories = categories ? categories.split(delim) : [];

  if (latitude && longitude && radius) {
    filterObj.latitude = latitude;
    filterObj.longitude = longitude;
    filterObj.radius = radius;
  } else if (city !== undefined) {
    filterObj.city = city;
  }

  const events = await Event.findAll();

  console.log('events are:');
  console.log(events);

  res.json({ ok: true });
});

module.exports = router;
