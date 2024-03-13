import JWT from 'jsonwebtoken'
import User from '../models/User.js'


export const requireSignIn = (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_TOKEN
        )
        console.log(decode);
        req.user = decode
        next()
    } catch (error) {
        console.log(error)
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById({ _id: req.user._id })
        if (user.role !== 1) {
            res.status(401).send({
                success: false,
                message: "Unauthorized access"
            })
        } else {
            next()
        }
    } catch (error) {
        console.log(error);
    }
}