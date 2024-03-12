import mongoose from "mongoose";
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String,
    // Other product attributes
})

const Product = mongoose.model('Product', productSchema)

export default Product