const express = require("express");
const router = express.Router();

router.get("/login", async (req, res) => {

  res.render("users/login");
});

router.get("/signup", async (req, res) => {

  res.render("users/signup");
});

module.exports = router;