let express = require("express");
let app = express();
let UsersRouter = require("./routes/users");
let PostsRouter = require("./routes/posts");
let bodyParser = require("body-parser");

app.listen(5000, () => {
  console.log("express is listening");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

app.use("/users", UsersRouter);
app.use("/posts", PostsRouter);
