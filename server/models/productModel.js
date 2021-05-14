import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
    },
    { timestamps: true }
);

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    artistName: {
        type: String,
        required: true,
    },
    albumName: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Number,
        required: true,
    },
    producers: {
        type: String,
        required: true,
    },
    albumCover: {
        type: String,
        required: true,
    },
    genres: {
        type: String,
        requited: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    numInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    review: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
});

const Product = mongoose.model('Product', productSchema)

export default Product