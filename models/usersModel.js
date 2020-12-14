const db = require("./db");

const getUserByEmail = async (email) => {
  const res = await db.pool.asyncQuery("SELECT * FROM Users WHERE email = ?", [
    email,
  ]);

  return res[0];
};

const getUserByID = async (id) => {
  const res = await db.pool.asyncQuery("SELECT * FROM Users WHERE user_id = ?", [
    id,
  ]);

  return res[0];
};

const post = async (data) => {

  // TODO check for valid email

  // TODO check for valid password

  // TODO check for uniq email

  const insertRes = await db.pool.asyncQuery(
    "INSERT INTO Users(email, password, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [
      data.email,
      data.password,
      new Date().toISOString().replace("T", " ").replace("Z", " "),
      new Date().toISOString().replace("T", " ").replace("Z", " "),
    ]
  );
  return insertRes;
};

module.exports = {
  post,
  getUserByEmail,
  getUserByID,
};
