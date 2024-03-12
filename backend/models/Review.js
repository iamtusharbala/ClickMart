import mongoose from "mongoose";
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    productId: { type: ObjectId, ref: 'Product' }, // References the Products Collection
    userId: { type: ObjectId, ref: 'User' }, // References the Users Collection
    rating: Number,
    reviewText: String,
    reviewDate: Date
})

const Review = mongoose.model('Review', reviewSchema)
export default Review