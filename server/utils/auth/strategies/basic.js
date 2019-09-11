const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const bcrypt = require("bcrypt");

const UserService = require("../../../services/users");

passport.use(
  new BasicStrategy(async (email, password, callback) => {
    // prettier-ignore

    const userServices = new UserService();

    try {
      const user = await userServices.getUser(email);

      if (!user) {
        console.log("El usuario no existe");
      }

      if (!(await bcrypt.compare(password, user.password))) {
        console.log("la clave no es correcta");
      }

      delete user.password;

      callback(null, user);
    } catch (err) {
      callback(err);
    }
  })
);
