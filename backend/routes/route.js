import express from "express";
const router = express.Router()
import { fetchAllItems, loginController, registerController, adminLoginController, registerAdminController } from "../controller/userController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


router.get('/', fetchAllItems)
router.post('/login', loginController)
router.post('/admin/login', adminLoginController)
router.post('/admin/register', registerAdminController)
router.post('/register', registerController)

router.post('/test', requireSignIn, isAdmin, (req, res) => {
    res.send('Protected routes')
})

router.all('*', (req, res) => {
    res.status(404).send({ "message": "Route not found" })
})
export default router