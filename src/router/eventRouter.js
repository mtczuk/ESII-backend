const express = require('express');
const { Event } = require('../models');
const { status, sendError } = require('../status');
const { getCoordinates } = require('../location');
const sequelize = require('sequelize');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

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

const eventFields = (event) => ({
  name: event.name,
  description: event.description,
  date: event.date,
  place: event.place,
  picture: event.picture || "",
  id: event.id,
});

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
    const events = rawEvents.map(eventFields);

    console.log('events are:');
    console.log(events);

    res.json(events);
  } catch (e) {
    // TODO: check if it always is a server error
    console.log('error was');
    console.log(e);
    sendError(res, status.SERVER_ERROR);
  }
});

// router.use(auth);

router.post('/', async (req, res) => {
  console.log(req.body);
  console.log('current user id is');
  console.log(req.userId);

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
      picture: "",
    });
    console.log('created event is');
    console.log(event);

    return res.status(status.CREATED.httpStatus).json({
      apiStatus: status.CREATED.apiStatus,
      httpStatus: status.CREATED.httpStatus,
      ...eventFields(event),
    });
  } catch (e) {
    // TODO: check if it really was a bad request
    console.log('error was');
    console.log(e);
    return sendError(res, status.BAD_REQUEST);
  }
});

router.post('/:id/image', upload.single('image'), async (req, res) => {
  console.log(req.userId);
  console.log('files');
  console.log(req.file);
  try {
    const event = await Event.findByPk(req.params.id);
    const prevImage = event.dataValues.picture;
    console.log('the previous image was');
    console.log(prevImage);

    if (prevImage) {
      fs.unlink(path.join(__dirname, '..', '..', prevImage), (err) => {
        if (err) {
          console.log('file could not be deleted');
          console.log(err);
        } else {
          console.log('file deleted');
        }
      });
    }

    event.update({picture: req.file.path});
    console.log('event is');
    console.log(event);
    sendError(res, status.OK);
  } catch (e) {
    console.log('error is');
    console.log(e);
    sendError(res, status.BAD_REQUEST);
  }
});

router.put('/:id', async (req, res) => {
  console.log('req is');
  console.log(req);
  res.send('ok');
});

module.exports = router;
