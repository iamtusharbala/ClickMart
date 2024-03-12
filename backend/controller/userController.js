import User from '../models/User.js'
import { comparePassword, passwordHash } from "../utils/password.js";


export const loginController = async (req, res) => {
    try {
        const data = await User.findOne({ email: req.body.email })
        if (data) {
            const checkPassword = await comparePassword(data, req.body.password) //Check entered password with hashed password
            checkPassword ? res.status(200).json({ "message": "Login successfull" }) : res.status(401).json({ "message": "Login unauthorised" })
        }
    } catch (error) {
        console.log(error);
    }
}


export const signupController = async (req, res) => {
    try {
        const data = await User.findOne({ email: req.body.email })
        if (data) {
            res.status(200).json({ "message": "User already exists" })
        }
        const newUser = new User({
            username: req.body.username,
            password: passwordHash(req.body.password),
            email: req.body.email
        })
        await newUser.save()
        res.status(201).json({ "message": "New User Created" })

    } catch (error) {
        console.log(error);
    }
}
