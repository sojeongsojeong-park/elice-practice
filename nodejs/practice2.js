const express = require('express');
const cors = require("cors");
const userData = require("./users.json");

const app = express();
const router = express.Router();
const port = 8080;


router.get("/users", (req, res) => {
  res.json(userData);
});

router.post("/users", (req, res) => {
  const inputData = req.body;
  inputData["id"] = userData.length + 1;

  res.json(inputData);
});

router.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const inputData = req.body;
  inputData["id"] = id;

  res.json(inputData);
});

router.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  
  res.json({
    message: `${id}가 삭제되었습니다.`
  });
});

//요청이 들어오면,
//1번
app.use(cors());
//2번
app.use(express.json()) //body-parser 내장되어있어서 사용 가능함
app.use(router);

app.listen(port, () => {
  console.log(`localhost:${port}`)
})