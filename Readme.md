#Overview

This folder includes mongodb connection, post api and how to run api for testing

#TeckStack

Mongodb || NodeJs

#How to Run

Step one: Connect Mongodb

-install mongodb 8.x.x or higher.use mongod --version check.

-type "mongosh" and get URL mongodb

-config enviroment variable with file .env

Step two: install dependencies

-type "npm install" setup dependencies for project

Step three: setup model MongoDB

-check file models/Post.js

-check file server.js (file connect mongodb with nodejs)

Step four: show collection

-open termial and type "mongosh"

-the next "show dbs" and Type "use Posts"

Step five: run import

-after all step above.You type "npm run import" and then "npm start"

-Test Api Get Posts :http://localhost:3000/api/posts

-Test Api Get Post by id : http://localhost:3000/api/posts/:id (use mongosh get id anything).

# backend
