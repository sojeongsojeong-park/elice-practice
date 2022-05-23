const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi, I'm post");
});

//front-end 개념
///posts/write
router.get("/write", (req, res) => {
  res.render("post/write", {});
});

//back-end 개념
//api => application program interface
//page

module.exports = router;