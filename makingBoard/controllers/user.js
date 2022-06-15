const User = require("../models/post");


/**
 * auto increasement
 * post ={
 *  post_id: 1,
 *  title: "안녕하세요",
 *  content: "반갑습니다.",
 *  writer: "관리자"
 * }
 */
module.exports.insertUser = async(user) => {
  try{
    const result = await User.create(user);
    return {message: "OK", data: result};
  } catch(err){
    return {message: err};
  }
}