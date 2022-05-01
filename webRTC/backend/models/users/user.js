import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  mail: { type: String, unique: true },
  username: { type: String },
  password: { type: String },
});

export default mongoose.model("User", UserSchema);
