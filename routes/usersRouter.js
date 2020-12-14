const express = require("express");
const usersService = require("../services/usersService");

const usersRouter = express.Router();

// POST
usersRouter.post("/", usersService.post);

module.exports = usersRouter;
