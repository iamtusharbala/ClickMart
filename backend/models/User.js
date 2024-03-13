import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        password: {
            type: String,
            required: true,
            unique: true
        }, // Hashed
        email: {
            type: String,
            required: true,
            unique: true
        },
        phoneNumber: {
            type: String,
            unique: true,
            default: null
        },
        role: {
            type: String,
            default: 0
        },
        avatar: String,
        shippingAddress: String,
        billingAddress: String,
        // Other user details
    }, { timestamps: true }
)

const User = mongoose.model('User', userSchema)
export default User