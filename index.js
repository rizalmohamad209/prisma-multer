const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mainRoutes = require("./src/routes/index");

app.listen(3001, () => {
  console.log("Server running in port 3001 ");
});
app.use(express.static("public"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", mainRoutes);
