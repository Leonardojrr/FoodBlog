let express = require("express");
let app = express();

let port = 5000;

app.listen(port, () => {
  console.log("express is listening at port: " + port);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/food", (req, resp) => {
  resp.json({ nombre: "leonardo", apellido: "Rodrigues" });
});
