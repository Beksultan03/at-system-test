## Stack
- Express.js 
- Typescript
- Yarn
- Redis
- Pino logger
- Joi validation
- eslint, prettier


## Launch
- create .env file
- docker-compose up redis
- npm run start:dev


## API
- POST /auth
JSON body: 
{
    "PHPSESSID": "session id"
}

- GET /balance