# Especificação da API

A autenticação funciona com Json Web Tokens.

**Sempre que a autenticação for necessária o token deve ser enviado no header Authorization da requisição desta forma:**

```sh
Authorization: Bearer <token>
```

Para etender melhor o fluxo de autenticação utilizando jwt: 
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

```
GET /user/:id

Response:
{
  ...USER,
  httpStatus: Number,
  apiStatus: String,
}

Needs authorization: YES
```

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

```
POST /authenticate

Req body:
{
  email: String,
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

```
GET /event?latitude=xx&longitude=xx&&radius=xxcity=xx&categories=cat1,cat2,cat3

Response:
{
  httpStatus: Number,
  apiStatus: String,
  events: [EVENT]
}

os query params ainda não funcionam, mas estão parcialmente codificados

atualmente essa rota apenas retorna todos os eventos
```

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

### APPLICATION STATUS

| App Status | Http Status |
|---|---|
| OK | 200 |
| CREATED | 201 |
| BAD_REQUEST | 400 |
| USER_DOES_NOT_EXIST | 401 |
| WRONG_PASSWORD | 401 |
| INVALID_TOKEN | 401 |
| FORBIDDEN | 403 |
| INVALID_ROUTE | 404 |
| NOT_FOUND | 404 |
| SERVER_ERROR | 500 |
