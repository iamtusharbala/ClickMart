import mongoose from "mongoose";
const Schema = mongoose.Schema


const cartSchema = new Schema({
    userId: { type: ObjectId, ref: 'User' }, // References the Users Collection
    items: [
        {
            productId: { type: ObjectId, ref: 'Product' }, // References the Products Collection
            quantity: Number
        },
        // Additional cart items as needed
    ]
})

const Cart = mongoose.model('Cart', cartSchema)
export default Cart