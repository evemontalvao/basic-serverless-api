This project is a exemple of how to create a simple Serverless API. It's a part of a presentation of how to move from REST to GraphQL.

# Requirements

- Docker installed. You can learn how to [here](https://docs.docker.com/v17.12/)
- Serverless framework installed globally. You can learn how to [here](https://serverless.com/framework/docs/getting-started/)

# Getting started

Open your terminal and type:
1. `cd {WORKSPACE}/basic-serverless-api`
2. `npm i`
3. `docker-compose up -d`
4. `npm start`

# Folder Structure

## ./api
All the handler functions are in this folder. Feel free to edit and see how it affects the final result :)

## ./config
Contains the database configuration. Here we are using PostgreSQL, but if you already have a configured database, you can change the configuration.

## ./db
### connection.js
Contains the database's instance to be used on all handlers.
### init.sql
Contains the basic database setup to be used by Docker on build.

## docker-compose.yml
The docker configuration file. It builds up the PostgreSQL container.

## serverless.yml
Serverless framework configuration file. Learn more [here](https://serverless.com/framework/docs/getting-started/)

  