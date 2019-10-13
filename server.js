const express = require('express');
// const pg = require('pg');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres Helippa API' });
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
