import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: 'customer'
  }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
