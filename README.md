# Helippa backend
Authors:

### Começando

**1. Clone o repositório em sua pasta de preferência**
```sh
$ git clone https://github.com/MacPardo/ESII-backend.git && cd ESII-backend
```


**2. Instale as dependências**
 ```sh
$ npm install
```

**3. Abra o arquivo /config/database.js**
Certifique-se que usuário, senha, host e porta são configuradas de acordo com a configuração do postgres no seu pc


**4. Criando o banco**
Na pasta raíz do projeto, e com o postgres rodando, execute os comandos:
 ```sh
$ npx sequelize db:create
```
 ```sh
$ npx sequelize db:migrate
```
Estes comandos devem criar o banco e migrar a estrutura dele, respectivamente

**5. Executando a api (dev)**
Na pasta raíz do projeto, execute o comando:
 ```sh
$ npm run dev
```
