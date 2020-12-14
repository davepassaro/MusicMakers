const isDevelopment = () => {
  return process.env.NODE_ENV === "development";
};

// TODO make a front end AJAX GET for /api/sessions to be used throughout site
const isLoggedIn = () => {

};

export { isDevelopment, isLoggedIn };
