import User from '../models/User.js'
import Product from '../models/Product.js'
import Admin from '../models/Admin.js';
import { comparePassword, passwordHash } from "../utils/password.js";
import JWT from 'jsonwebtoken'


export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email not registered"
            })
        }
        // console.log(user.password, password);
        const checkPassword = await comparePassword(user.password, password) //Check entered password with hashed password
        if (!checkPassword) {
            return res.status(404).send({
                success: false,
                message: "Incorrect Password"
            })
        }
        // Assign token
        const token = JWT.sign({ _id: user._id }, process.env.JWT_TOKEN, { expiresIn: '7d' })
        res.status(200).send({
            success: true,
            message: 'Logged in successfully',
            user: {
                user: user.firstName,
                email: user.email,
                token
            }
        })
    } catch (error) {
        console.log(error);
    }
}


// Registering a user
export const registerController = async (req, res) => {
    try {
        const data = await User.findOne({ email: req.body.email })
        if (data) {
            res.status(200).send({ "message": "User already exists" })
        }
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: passwordHash(req.body.password)
        })
        await newUser.save()
        res.status(201).send({ "message": "New User Created" })

    } catch (error) {
        console.log(error);
    }
}


export const fetchAllItems = async (req, res) => {
    try {
        const fetchData = await Product.find()
        fetchData.length > 0 ? res.status(200).send({ "success": "true", "data": fetchData }) : res.status(404).send({ "status": "false", "message": "Not found" })
    } catch (error) {
        console.log(error);
    }
}


// Admin login
export const adminLoginController = async (req, res) => {
    try {
        const data = await Admin.findOne({ email: req.body.findOne })
        if (data) {
            const checkPassword = await comparePassword(data, req.body.password) //Check entered password with hashed password
            checkPassword ? res.status(200).send({ "message": "Admin Login successfull" }) : res.status(401).send({ "message": "Login unauthorised" })
        }

    } catch (error) {
        console.log(error);
    }
}


// Registering Admin
export const registerAdminController = async (req, res) => {
    try {
        const data = await Admin.findOne({ email: req.body.email })
        if (data) {
            res.status(200).send({ "message": "Admin already exists" })
        }
        const newAdmin = new Admin({
            email: req.body.email,
            password: passwordHash(req.body.password)
        })
        await newAdmin.save()
        res.status(201).send({ "message": "New Admin Created" })

    } catch (error) {
        console.log(error);
    }
}
