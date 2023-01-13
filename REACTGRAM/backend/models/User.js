const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },
  {
    timestamps: true, //tempo que foi criado/atualizado
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
