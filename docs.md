# Especificação da API

A autenticação funciona com Json Web Tokens.

**Sempre que a autenticação for necessária o token deve ser enviado no header Authorization da requisição desta forma:**

```sh
Authorization: Bearer <token>
```

Para entender melhor o fluxo de autenticação utilizando jwt: 
https://medium.com/tableless/entendendo-tokens-jwt-json-web-token-413c6d1397f6 

### ALIASES
```
USER = {
  name: String,
  email: String,
  phone: String,
  radius: Number,
  street: String,
  number_home: Number,
  complement: String,
  neighbourhood: String,
  city: String,
  postal_code: String
}

EVENT = {
  name: String,
  description: String,
  date: String,
  latitude: Number,
  longitude: Number,
  city: String,
  picture: String
}
```

### ROUTES

Retorna o usuário com base no authentication token
```
GET /user

Response:
{
  ...USER,
  httpStatus: Number,
  apiStatus: String,
}

Needs authorization: YES
```

<hr/>
Insere um usuário

```
POST /user

Req body:
{
  ...USER,
  password: String,
}

Response:
{
  token: String
  httpStatus: Number,
  apiStatus: String,
  id: Number,
}

Needs authorization: NO
```

<hr/>

Retorna um token da API com base no token do facebook

O token do facebook é passado no campo "fbtoken" do Header
```
POST /authenticate

Req body: (string vazia)

Response:
{
  token: String
  httpStatus: Number,
  apiStatus: String,
  id: Number,
}

Needs authorization: NO
```

<hr/>

Altera o usuário que está autenticado. O usuário é identificado através do token 

```
PUT /user

Req body:
{
  ...USER,
}

Response:
{
  httpStatus: Number,
  apiStatus: String,
}

Needs authorization: YES
```

<hr/>

Retorna uma lista de eventos.

Os query params ainda não funcionam, mas estão parcialmente implementados.

Atualmente apenas retorna uma lista com todos os eventos.

```
GET /event?page=xx&perPage=xx&latitude=xx&longitude=xx&&radius=xxcity=xx&categories=cat1,cat2,cat3

Response:
{
  httpStatus: Number,
  apiStatus: String,
  events: [EVENT]
}
```

<hr/>

Adiciona um evento.

```
POST /event

Req body:
{
  name: String,
  description: String,
  date: String,
  place: String
}

Response:
{
  apiStatus: String,
  httpStatus: Number,
  ...EVENT
}
```

<hr/>

Adiciona a imagem do evento :eventId

A imagem não pode se adicionada juntamente com a requisicao `POST /event` pois imagens não podem ser enviadas por JSON, apenas com FormData.

```
POST /event/:eventId/image

Essa requisição é feita com FormData, diferentemente das outras, que são com JSON

Req body:
A imagem vai no campo "image"

Response:
{
  apiStatus: Number,
  httpStatus: String
}
```

<hr/>

Altera o evento com id :eventId

```
PUT /event/:eventId

Req body:
{
  ...EVENT
}

Response:
{
  apiStatus: Number,
  httpStatus: String
}
```

<hr/>

### APPLICATION STATUS

| App Status          | Http Status |
| ------------------- | ----------- |
| OK                  | 200         |
| CREATED             | 201         |
| BAD_REQUEST         | 400         |
| USER_DOES_NOT_EXIST | 401         |
| WRONG_PASSWORD      | 401         |
| INVALID_TOKEN       | 401         |
| FORBIDDEN           | 403         |
| INVALID_ROUTE       | 404         |
| NOT_FOUND           | 404         |
| SERVER_ERROR        | 500         |
