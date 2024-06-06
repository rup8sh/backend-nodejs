const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminroutes = require("./routes/admin");
const shoproutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminroutes); // Use the admin routes middleware
app.use(shoproutes); // Use the shop routes middleware
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
