const isLoggedIn = async (req, res, next) => {
  if (req.isAuthenticated()) {
    const { email } = req.user;
    res.status(200).send({ email: email });
    return;
  } else {
    res.status(401).end();
    return;
  }
};

const logIn = async (err, user, info, req, res, next) => {
  // server error
  if (err) {
    res.status(500);
    return;
  }

  // send res for incorrect email or password
  if (!user) {
    console.log(info.message)
    res.status(400).send(info.message);
    return;
  }

  // place authenticated user into req.user
  req.logIn(user, function (err) {
    if (err) {
      // server error
      res.status(500);
      return;
    }
  });

  res.status(201).send("Login succesful");
  return;
};

const logOut = async (req, res, next) => {
  if (req.user === undefined) {
    res.status(400).end();
    return;
  } else {
    req.logOut();
    res.status(204).end();
    return;
  }
};

module.exports = {
  isLoggedIn,
  logIn,
  logOut,
};
