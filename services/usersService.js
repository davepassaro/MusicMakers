const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

const post = async (req, res, next) => {
  // TODO validate req body

  //If email is already in db, do not allow them to create account.
/*   const response = await usersModel.getUserByEmail(req.body.email)
  if(response.email){
    console.log("same email foud")
    //res.status(400).send({"Error": "Account with this email already exists"})
  } */

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const dbRes = usersModel.post({
      email: req.body.email,
      password: hashedPassword,
    });
    //console.log(dbRes); // TODO remove
    res.status(200).end(); // TODO status code
  } catch (e) {
    console.log("error")
    res.status(400).end(); // TODO status code
  }

  // TODO send email
};

module.exports = {
  post,
};
