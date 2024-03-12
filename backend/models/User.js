import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
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
        phoneNumber: { //Problem here
            type: String,
            unique: true,
            default: null
        },
        avatar: String,
        shippingAddress: String,
        billingAddress: String,
        // Other user details
    }
)

const User = mongoose.model('User', userSchema)
export default User