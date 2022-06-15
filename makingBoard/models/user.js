const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const userSchema = new mongoose.Schema({
  user_id: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

userSchema.plugin(autoIncrement.plugin, {
  model: "user",
  field: "user_id",
  startAt: 1,
});

const user = mongoose.model("user", userSchema);

module.exports = user;