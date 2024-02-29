const { User } = require('../models/User.model');
const jwt = require('jsonwebtoken');
const { signToken } = require('../utils/Token');

exports.signUp = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const newUser = await User.create({
            name,
            email,
            password
        }); // return newUser object with complete detail

        const token = signToken(newUser); // return jwt-token

        res.cookie("token", token)
        res.json({
            success: true,
            message: "User Created Successfully"
        });

    } catch (error) {

        res.json({ errr: error.message })

    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });

        if (!user) return res.json({ error: "Invalid Email or Password" });

        const token = signToken(user);
        res.cookie('token', token);

        res.json({
            success: true,
            message: "Login Successfull"
        });
    } catch (error) {

    }
}

exports.logout = (req, res) => {
    res.cookie("token", "")
    res.json({ msg: "logout successfully" })
}