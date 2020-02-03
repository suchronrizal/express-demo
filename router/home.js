const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "First index html", message: "Hallo" });
});

module.exports = router;
