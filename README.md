# Simple Mongo Server PoC

This allows for running queries on the same domain from React and such in a relatively safe manner.

Disclaimer: Proof of Concept, not for production use 

## Requirements

- Docker 
- Node >=18 


## Installation / running 

- npm i yarn --save
- npm install 
- cp env.test .env
- docker-compose -f ./docker-compose-mongo.yml up -d 
- node index.js

## Example queries 

- curl -d '{"login":"admin", "pass": "admin", "db": "test", "collection": "test", "query": {}}' -H "Content-Type: application/json" -X POST http://127.0.0.1:3000/query

- curl -d '{"login":"admin", "pass": "admin", "db": "test", "collection": "test", "query": {}, "update": {"firstname": "john", "lastname": "doe"}}' -H "Content-Type: application/json" -X POST http://127.0.0.1:3000/upsert

- curl -d '{"login":"admin", "pass": "admin", "db": "test", "collection": "test", "query": {}}' -H "Content-Type: application/json" -X POST http://127.0.0.1:3000/delete