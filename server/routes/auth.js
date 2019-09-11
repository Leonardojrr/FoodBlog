const express = require("express");
const router = express.Router();
const UserService = require("../services/users");
const bcrypt = require("bcrypt");

const userServices = new UserService();

router.post("/regist", async (req, res) => {
  const { body: user } = req;

  const users = await userServices.getUsers({$or: [{ email: { $eq: user.email } }, { username: { $eq: user.username } }]}); // prettier-ignore

  if (users.length === 0) {
    const userId = await userServices.createUser(user);

    if (userId) {
      delete user.password;
      delete user._id;

      req.session.user = user;

      res.json({
        status: 201,
        session: req.session.user,
        msg: "User created"
      });
    } else {
      res.json({
        status: 500,
        msg: "Error in the server"
      });
    }
  } else {
    res.json({
      status: 422,
      msg: "The user already exist"
    });
  }
});

router.get("/login", async (req, res) => {
  if (!req.session.user) {
    const { logEmail, logUsername, logPassword } = req.query;

    const user = await userServices.getUsers({$or: [{ email: { $eq: logEmail } }, { username: { $eq: logUsername } }]}); //prettier-ignore

    if (user.length !== 0) {
      const match = await bcrypt.compare(logPassword, user[0].password);

      if (match) {
        delete user[0].password;
        delete user[0]._id;

        req.session.user = user;

        res.json({
          status: 200,
          session: req.session.user,
          msg: "login success"
        });
      } else {
        res.json({
          status: 401,
          msg: "Unauthorized"
        });
      }
    } else {
      res.json({
        status: 401,
        msg: "Unauthorized"
      });
    }
  } else {
    res.json({
      status: 400,
      msg: "already logged in"
    });
  }
});

module.exports = router;
