const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user");

router.post("/", async (req, res, next) => {
  const result = await UserController.insertUser(req.body);

  if (result.message == "OK") {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

module.exports = router;