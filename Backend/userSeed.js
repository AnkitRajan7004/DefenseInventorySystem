import User from "./models/User.js";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
import bcrypt from "bcrypt";
import connectToDatabase from "./db/db.js";

//dotenv.config();
const userRegister = async () => {
  connectToDatabase();
  try {
    connectToDatabase();
    
    const existingAdmin = await User.findOne({ email: "admin@gmail.com" });
    if (existingAdmin) {
      console.log("⚠️ Admin user already exists.");
      return;
    }

    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });

    await newUser.save();
  } catch (error) {
    console.error(error);
  } 
};

userRegister();
