const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminroutes = require("./routes/admin");
const shoproutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminroutes); // Use the admin routes middleware
app.use(shoproutes); // Use the shop routes middleware
app.use((req, res, next) => {
  res.status(404).send("<h1>ERROR : PAGE NOT FOUND</h1>");
});
app.listen(3000);
