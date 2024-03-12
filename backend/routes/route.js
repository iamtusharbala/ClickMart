import express from "express";
import User from '../models/User.js'
const app = express()
const router = express.Router()
import { loginController, signupController } from "../controller/userController.js";


router.get('/', (req, res) => {
    res.send('Hellooo...')
})

router.post('/login', loginController)
router.post('/signup', signupController)

export default router