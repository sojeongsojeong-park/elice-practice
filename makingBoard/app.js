const express = require("express");
const mongoose = require("mongoose");

const UserRouter = require("./routes/user");
const UserAPIRouter = require("./routes/api/user");
const PostRouter = require("./routes/post");
const PostAPIRouter = require("./routes/api/post");

mongoose.connect("mongodb://127.0.0.1:27017/elice", (err) => {
  if (err) console.log("DB 연결 에러 : " + err);
  else console.log("DB 연결 성공");
});

const PORT = 5000;

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use("/users", UserRouter);
app.use("/api/users", UserAPIRouter);
app.use("/posts", PostRouter);
app.use("/api/posts", PostAPIRouter);

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.listen(PORT, () => {
  console.log(`listen localhost:${PORT}`);
});