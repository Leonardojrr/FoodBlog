const express = require("express");
const app = express();
const UsersRouter = require("./routes/users");
const PostsRouter = require("./routes/posts");
const AuthRouter = require("./routes/auth");
const bodyParser = require("body-parser");
const session = require("express-session");
const config = require("./config");

app.listen(5000, () => {
  console.log("express is listening");
});

// Permite acceder de cualquier lugar al servidor
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Bodyparser para tomar el body de las peticiones
app.use(bodyParser.json());

//Crea una sesion a la conexion
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: config.authJwtSecret
  })
);

app.use("/users", UsersRouter);
app.use("/posts", PostsRouter);
app.use("/auth", AuthRouter);
