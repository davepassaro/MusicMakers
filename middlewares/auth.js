// interrupts router functions if the user is not logged in
const isLoggedIn = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      // proceed to next router function since user is logged in
      next();
    } else {
      throw new Error();
    }
  } catch (e) {
    res.status(401).end();
    return;
  }
};

module.exports = {
  isLoggedIn,
};
