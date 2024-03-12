import mongoose from "mongoose";
const Schema = mongoose.Schema

const orderSchema = new Schema({
    userId: { type: ObjectId, ref: 'User' }, // References the Users Collection
    orderDate: Date,
    totalAmount: Number,
    orderStatus: String,
    orderItems: [
        {
            productId: { type: ObjectId, ref: 'Product' }, // References the Products Collection
            quantity: Number,
            unitPrice: Number
        },
        // Additional order items as needed
    ]
}
)

const Order = mongoose.model('Order', orderSchema)
export default Order