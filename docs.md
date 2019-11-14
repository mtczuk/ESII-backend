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
  radius: String,
  street: String,
  number_home: Number,
  complement: String,
  neighbourhood: String,
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
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNT
```

### APPLICATION STATUS

| App Status | Http Status |
|---|---|
| OK | 200 |
| CREATED | 201 |
| USER_DOES_NOT_EXIST | 401 |
| WRONG_PASSWORD | 401 |
| INVALID_TOKEN | 401 |
| FORBIDDEN | 403 |
| INVALID_ROUTE | 404 |
| NOT_FOUND | 404 |
| SERVER_ERROR | 500 |