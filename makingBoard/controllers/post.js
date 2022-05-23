const Post = require("../models/post");


/**
 * auto increasement
 * post ={
 *  post_id: 1,
 *  title: "안녕하세요",
 *  content: "반갑습니다.",
 *  writer: "관리자"
 * }
 */
module.exports.writePost = async(post) => {
  try{
    return await Post.create(post);
  } catch(err){
    return err;
  }
}