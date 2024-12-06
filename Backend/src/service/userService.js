import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
  let hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const createNewUser = (email, password, username) => {
  let hashPassword = hashUserPassword(password);
  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, hashPassword, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "studyenglish",
    Promise: bluebird,
  });
  //   let users = [];
  //   return connection.query(
  //     "Select * from users",
  //     function (err, results, fields) {
  //       if (err) {
  //         console.log(err);
  //         return users;
  //       }
  //       users = results;
  //       return users;
  //     }
  //   );
  try {
    const [rows, fields] = await connection.execute("Select * from users");
    return rows;
  } catch (e) {
    console.log("check error ", e);
  }
};
module.exports = {
  createNewUser,
  getUserList,
};
