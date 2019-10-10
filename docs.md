# Especificação da API

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
GET /user/:id?token=xx

Response:
{
  ...USER,
  httpStatus: Number,
  appStatus: String,
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
  appStatus: String,
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
  appStatus: String,
}
```

```
PUT /user

Req body:
{
  token: String,
  ...USER,
  // pode colocar só as propriedades que devem ser alteradas    
}

Response:
{
  httpStatus: Number,
  appStatus: String,
}
```

```
GET /interest?token=xx&page=xx&per_page=xx

Response:
{
  interests: [INTEREST],
  httpStatus: Number,
  appStatus: String
}
```

```
GET /interest/:id?token=xx

Response:
{
  ...INTEREST,
  httpStatus: Number,
  appStatus: String
}

```

### APPLICATION STATUS

| App Status | Http Status |
|---|---|
|OK | 200 |
| CREATED | 201 |
| USER_DOES_NOT_EXIST | 401 |
| WRONG_PASSWORD | 401 |
| INVALID_TOKEN | 401 |
| FORBIDDEN | 403 |
| NOT_FOUND | 404 |
| SERVER_ERROR | 500 |