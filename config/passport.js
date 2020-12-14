const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const userModel = require("../models/usersModel");

async function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = await userModel.getUserByEmail(email);

    // if email does not exist
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      // if correct password
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  // put user_id, email, created_at and updated_at into session
  passport.serializeUser((user, done) => {
    delete user.password;
    done(null, user.user_id);
  });

  // get user_id, email, created_at and updated_at from session
  passport.deserializeUser(async (userID, done) => {
    return done(null, await userModel.getUserByID(userID));
  });
}

module.exports = initialize;
