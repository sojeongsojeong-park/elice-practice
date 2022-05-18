const obj = {
  name:"sojeong",
  age:25,
  address: "busan"
}

let out = JSON.stringify(obj);
console.log(out)
const fs = require("fs");
fs.writeFile("practice.json", out, "utf8", (err) => {
  if(err){ console.log("에러 발생:" + err)}
  else {
    const newObj = require("./practice.json")
    console.log(newObj)
  }
})


