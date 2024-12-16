const express = require('express');
const server = express();
const sqlite3 = require('sqlite3').verbose();


server
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  })
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

server.listen(3000, () => {
  console.log("Server started on port 3000");
});