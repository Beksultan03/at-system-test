## Stack
- Express.js 
- Typescript
- Npm
- Redis
- Pino logger
- Joi validation
- eslint, prettier


## Launch
- create .env file
- docker build -t at-system -f .\Dockerfile .
- docker-compose up


## API
- POST /auth
JSON body: 
{
    "PHPSESSID": "session id"
}

- GET /balance
