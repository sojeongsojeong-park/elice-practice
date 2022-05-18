const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 3000;


//서버에 DB를 띄운다
//집에서 접근하고 싶다.
//DB설정: 외부에서 접근 가능하도록
//서버 주소를 127.0.0.1에 넣어주면 됨 ( 다른 서버 IP )
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/elice", {
  useNewUrlParser: true
}, (err) => {
  if(err) console.log("연결 에러:" + err);
  else console.log("연결 성공");
});

//Defind Schemes
const usersSchema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  phone:{type:String}
})
const UsersModel = mongoose.model("newUsers", usersSchema);

app.get("/users", (req, res, next) => {
  async function findUsers(){
    const users = await UsersModel.find({});
    res.json(users);
  }
  // users 데이터를 반환
  // res.send() : 텍스트 데이터 반환
  // res.json() : 객체를 json 형태로 반환
  // res.send(JSON.stringify(userData));
  findUsers()
})

/**
 * {
 *  name:"John",
 * email:"john@naver.com",
 * phone:"010-1234-5678"
 * }
 */
app.post("/users", (req, res, next) => {
  const newUserData = req.body;

  const newUser = new UsersModel(newUserData);
  newUser
    .save()
    .then(() => {res.send("잘 저장 되었음!")})
})
app.put("/users/:id", (req, res, next) =>{
  const id = req.params.id;
  const updateData = req.body;

  async function updateUser(targetId, data){
    const result = await UsersModel.updateOne(
      {_id: targetId},
      data
    );
    res.json(result);
  }
  updateUser(id, updateData);
})

app.delete("/users/:id", (req, res, next) => {
  const id = req.params.id;

  async function deleteUser(targetId){
    const result = await UsersModel.deleteOne(
      {_id: targetId}
    );
    res.json();
  }
  deleteUser(id);
})

app.listen(port, () => {
  console.log(`localhost:${port}`)
})
