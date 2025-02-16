import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import User from "../models/User.js"; 

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        // Find user in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false,error: "User not Found" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({success: false,error: "Wrong Password" });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_KEY,
            { expiresIn: "1d" }
        );

        // Send the response
        res.status(200).json({ 
            success: true, 
            token,
            user: { _id: user._id, name: user.name, role: user.role },
        });

    } catch (error) {
        console.error("Login Error:", error.message);
       res.status(500).json({success: false, error: error.message });
    }
};

const verify = (req, res ) =>{
  return  res.status(200).json({success: true, user: req.user });

}

export {login, verify };
