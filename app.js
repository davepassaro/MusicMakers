require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const util = require("./utils/utils");
const session = require("express-session");
const passport = require("passport");
const initializePassport = require("./config/passport");
const apiRouter = require("./routes");

const app = express();

if (util.isDevelopment()) {
  app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
}

initializePassport(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "build")));

app.use("/api", apiRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
