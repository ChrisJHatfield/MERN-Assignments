const mongoose = require('mongoose');

const ReviewsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required."],
        minlength: [2, "Name must be at least 2 characters!"]
    },
    review: {
        type: String,
        required: [true, "Review field is required."],
        minlength: [12, "Review must be at least 12 characters!"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be at least 1 star!"],
        max: [5, "Rating can't exceed 5 stars!"]
    }
})

module.exports = { ReviewsSchema };