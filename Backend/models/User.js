import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      //unique: true,
      trim: true,
      lowercase: true,
      //index: { unique: true },
      // match: [
      //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      //   "Please enter a valid email",
      // ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [10, "Password must be at least 10 characters"],
      // validate: {
      //   validator: function (value) {
      //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(value);
      //   },
      //   message:
      //     "Password must contain at least 10 characters, including uppercase, lowercase, number, and special character.",
      // },
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "employee"],
      // default: "employee",
    },
    photo: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    bio: {
      type: String,
      maxLength: [250, "Bio must not be more than 250 characters"],
      default: "bio",
    },
  },
  { timestamps: true } 
);

const User = mongoose.model("User", userSchema);

export default User;
