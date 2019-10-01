const express = require('express');
// const cors = require('cors')

// pra funcionar a conexão com o bd ativar ssl

const pg = require('pg');

pg.defaults.ssl = true;

const { User } = require('./src/models');
const { Interest } = require('./src/models');

User.sync();
Interest.sync();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// libera acesso para todos os domínios
// app.use(cors());

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres Helippa API' });
});

// quaquer rota que inicie com /api, é redirecionada p/ routes
app.use('/api', require('./src/routes'));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
