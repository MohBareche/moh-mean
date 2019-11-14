import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const {
  Schema
} = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre("save", async function (next) {
  // if user is modified or user is new
  if (this.isModified("password" || this.isNew)) {
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(this.password, salt);
    this.password = hash;
  }
});

export default mongoose.model("User", userSchema);