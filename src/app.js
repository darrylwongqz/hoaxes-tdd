const express = require("express");
const UserRouter = require("./user/UserRouter");
const app = express();

app.use(express.json());

app.use(UserRouter);

console.log("env: " + process.env.NODE_ENV);

module.exports = app;

// npx http-server -c-1 -p 8080 -P http://localhost:3000
