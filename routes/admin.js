const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.write("<html>");
  res.write("<head><title>Enter Message</title><head>");
  res.write(
    '<body><form action="/admin/add-product" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
  );
  res.write("</html>");
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
