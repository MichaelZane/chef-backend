const express = require("express");
const server = express();
const middleWare = require("./setUpMiddleWare.js");

// middleWare
middleWare(server);

module.exports = server;
