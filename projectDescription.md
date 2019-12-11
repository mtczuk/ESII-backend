# Descrição do Projeto

### Este arquivo tem o intuito de explicar de forma sucinta a estrutura do código

<hr/>

O diretório `test/` contém testes que podem ser rodados com `npm test`. Poucos testes foram desenvolvidos,
mas a estrutura já está encaminhada para quem der continuidade ao projeto.

A pasta `config/` contém configurações do banco de dados utilizadas pelo Sequelize.

A pasta `database/` foi gerada pelo Sequelize e contém [migrations](https://sequelize.org/master/manual/migrations.html) e [seeders](https://sequelize.org/master/manual/migrations.html#creating-first-seed).

A pasta `src/` contém o código do projeto em si.

`src/server.js` é o ponto de entrada que incia o processo.

`src/status.js` contém definições de status da API e seus respectivos status HTTP. Também tem uma função utilitária que apenas manda uma resposta com um erro.

`src/location.js` contém uma função que encontra as coordenadas a partir de uma string que descreve um endereço (utilizando a API LocationIQ). Essa função não chegou a ser utilizada, mas pode ser aproveitada futuramente &mdash; ou removida, caso o frontend passe a mandar as coordenadas ao invés de uma string com o endereço do evento.

`src/middlewares/` contém todos os [middlewares](https://expressjs.com/pt-br/guide/using-middleware.html) utilizados no projeto.

Atualmente existe apenas um middleware, o `src/middlewares/auth.js`, que verifica se o usuário está autenticado através do token. Caso o usuário não esteja autenticado, o erro INVALID_TOKEN é enviado. Esse middleware deve ser utilizado somente antes das rotas protegidas, e não antes das rotas públicas, como `GET /api/event/`, por exemplo.

A pasta `src/models/` contém todos os Models para cada tabela, que por enquanto são apenas `User` e `Event`. Os arquivos dessa pasta foram gerados automaticamente pelo Sequelize.

A pasta `src/router/` implementa todas as rotas da API, descritas no arquivo [API.md](https://github.com/MacPardo/ESII-backend/blob/master/API.md).

Os arquivos `src/router/authRouter.js`, `src/router/eventRouter.js` e `src/router/userRouter.js` implementas as rotas relacionadas com autenticação, eventos e o usuário, respectivamente. O arquivo `src/router/index.js` agrupa todos os routers em um único router, que é importado pelo arquivo `src/server.js`.
