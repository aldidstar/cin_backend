# cin-backend

## GET STARTED

- run "npm i"
- create database with name "cin_backend"
- run sequelize commands "npx sequelize-cli db:migrate" to setup database
- copy file .env.example, paste and rename it to .env
- replace JWT_SECRET to actual secret key
- run "npm run dev"

### POST api/register

- body

```
{
    name : "string",
    email : "string@email.com",
    password : "password"
}
```

- response

```
{
  "message": "User with email string@email.com is created"
}
```

### POST api/login

- body

```
{
    email : "string@email.com",
    password : "password"
}
```

- response

```
{
  "message": "Login success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6bnVsbCwiZW1haWwiOiJqb3ZpQG1haWwuY29tIiwiaWF0IjoxNjkwMjExNTU2fQ.QsDdGcF5UEufuveTXnrMZjCT8LEn-D5L4qwyhE0ubGM"
}
```

### GET api/me

- headers

```
{
    token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6bnVsbCwiZW1haWwiOiJqb3ZpQG1haWwuY29tIiwiaWF0IjoxNjkwMjExNTU2fQ.QsDdGcF5UEufuveTXnrMZjCT8LEn-D5L4qwyhE0ubGM"
}
```

- response

```
{
  "id": 1,
  "name": "string",
  "email": "string@email.com",
  "iat": 1690211162
}
```
