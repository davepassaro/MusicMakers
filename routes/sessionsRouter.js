const express = require("express");
const passport = require("passport");
const sessionsService = require("../services/sessionsService");
const sessionsRouter = express.Router();

// check if user is logged in
sessionsRouter.get("/", sessionsService.isLoggedIn);

// attempt to log in user
sessionsRouter.post("/", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    sessionsService.logIn(err, user, info, req, res, next);
  })(req, res, next);
});

// log out user
sessionsRouter.delete("/", sessionsService.logOut);

module.exports = sessionsRouter;
