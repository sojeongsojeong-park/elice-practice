const express = require('express');
const router = express.Router();

const PostController = require('../../controllers/post');

//post create :mechod post
router.post("/", async(req, res) =>{
  const newPost = req.body;
  console.log(await PostController.writePost(newPost));

  res.json({
    message:"OK"
  })
})

module.exports = router;