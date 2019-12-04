const express = require('express');
const cors = require('cors');
require('dotenv').config();

// const pg = require('pg');
const routes = require('./router');
const { status, sendError } = require('./status');

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres Helippa API' });
});

app.use('/api', routes);
app.use('*', (req, res) => {
  sendError(res, status.INVALID_ROUTE);
});

app.listen(port);
