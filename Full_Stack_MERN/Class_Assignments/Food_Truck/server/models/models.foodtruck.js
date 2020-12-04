const mongoose = require('mongoose');
const { ReviewsSchema } = require('./models.reviews');

const FoodtruckSchema = new mongoose.Schema({
    truckName: {
        type: String,
        required: [true, "Truck Name field is required."],
        minlength: [5, "Name must be at least 5 characters!"]
    },
    style: {
        type: String,
        required: [true, "Style field is required."],
        minlength: [3, "Style must be at least 3 characters!"]
    },
    description: {
        type: String,
        required: [true, "description field is required."],
        minlength: [10, "Description must be at least 10 characters!"]
    },
    reviews: [ReviewsSchema]
}, {timestamps: true})

const Foodtruck = mongoose.model("Foodtruck", FoodtruckSchema );
module.exports = { Foodtruck }