# Especificação da API

A autenticação funciona com Json Web Tokens.

**Sempre que a autenticação for necessária o token deve ser enviado no header Authentication**

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

INTEREST = {
  name: String,
  description: String,
  image_path: String,
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
}
```

```
POST /user/login

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
}
```

```
PUT /user

Req body:
{
  ...USER,
  // pode colocar só as propriedades que devem ser alteradas    
}

Response:
{
  httpStatus: Number,
  apiStatus: String,
}
```

```
GET /interest?page=xx&per_page=xx

Response:
{
  interests: [INTEREST],
  httpStatus: Number,
  apiStatus: String
}
```

```
GET /interest/:id

Response:
{
  ...INTEREST,
  httpStatus: Number,
  apiStatus: String
}

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