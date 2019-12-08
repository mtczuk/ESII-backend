const express = require('express');
const { Event } = require('../models');
const { status, sendError } = require('../status');
const { getCoordinates } = require('../location');
const sequelize = require('sequelize');
const multer = require('multer');
const path = require('path');

const auth = require('../middlewares/auth');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  }, filename: (req, file, cb) => {
    cb(null, `${req.params.id}_${new Date().getTime()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

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

  try {
    const rawEvents = await Event.findAll();
    const events = rawEvents.map((event) => ({
      name: event.name,
      description: event.description,
      date: event.date,
      place: event.place,
      picture: event.picture,
    }));

    console.log('events are:');
    console.log(events);

    res.json(events);
  } catch (e) {
    // TODO: check if it always is a server error
    sendError(res, status.SERVER_ERROR);
  }
});

router.use(auth);

router.post('/', async (req, res) => {
  console.log(req.body);

  const {
    name,
    description,
    date,
    place,
  } = req.body;

  try {
    const event = await Event.create({
      name,
      description,
      date,
      place,
    });
    console.log('created event is');
    console.log(event);

    return res.status(status.CREATED.httpStatus).json({
      apiStatus: status.CREATED.apiStatus,
      httpStatus: status.CREATED.httpStatus,
    });
  } catch (e) {
    // TODO: check if it really was a bad request
    return sendError(res, status.BAD_REQUEST);
  }
});

router.post('/:id/image', upload.single('image'), async (req, res) => {
  console.log(req.userId);
  console.log('files');
  console.log(req.files);
  res.send('ok');
});

module.exports = router;
