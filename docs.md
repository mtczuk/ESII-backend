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
  httpStatus: Number
  status: String,
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
  status: String,
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
  status: String,
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
  status: String,
}
```

```
GET /interest?token=xx&page=xx&per_page=xx

Response:
{
  interests: [INTEREST],
  httpStatus: Number,
  status: String
}
```

```
GET /interest/:id?token=xx

Response:
{
  ...INTEREST,
  httpStatus: Number,
  status: String
}

```

### APPLICATION STATUS

| App Status | Http Status |
|---|---|
|OK | 200 |
| CREATED | 201 |
| WRONG_EMAIL | 401 |
| WRONG_PASSWORD | 401 |
| INVALID_TOKEN | 401 |
| FORBIDDEN | 403 |
| NOT_FOUND | 404 |
| SERVER_ERROR | 500 |