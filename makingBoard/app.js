 const express = require('express');
 const mongoose = require("mongoose");
 const app = express();

 const PORT = 3000;

const PostRouter = require("./routes/post")
const PostAPIRouter = require("./routes/api/post")

 mongoose.connect("mongodb://127.0.0.1:27017/elice", (err) => {
   if(err) console.log("DB 연결 에러 : " + err);
   else console.log("DB 연결 성공");
 })
 app.set('view engine', "pug");
 app.use(express.json());//bodyParser

 // /posts/write => /write
 app.use("/posts", PostRouter);
 app.use("/api/posts", PostAPIRouter);

 app.listen(PORT, () => {
   console.log(`localhost:${PORT}`);
 })