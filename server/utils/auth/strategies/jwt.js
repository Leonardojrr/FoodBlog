const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const config = require("../../../config");
const bcrypt = require("bcrypt");
const UserService = require("../../../services/users");

passport.use(
  new Strategy({
    secretOrKey: config.authJwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  }),
  async (tokenPayload, callback) => {
    const userServices = new UserService();

    try {
      const user = await userServices.getUser({ email: tokenPayload.email });

      if (!user) {
        console.log("el usuario no existe");
      }

      if (!(await bcrypt.compare(tokenPayload.password, user.password))) {
        console.log("la clave es incorrecta");
      }

      delete user.password;

      callback(null, { user, scopes: tokenPayload.scopes });
    } catch (err) {}
  }
);
