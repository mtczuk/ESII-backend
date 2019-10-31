const express = require('express');
// const pg = require('pg');
const routes = require('./routes');
const { status, sendError } = require('./status');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres Helippa API' });
});

app.use('/api', routes);
app.use('*', (req, res) => {
  sendError(res, status.INVALID_ROUTE);
});

app.listen(port);
