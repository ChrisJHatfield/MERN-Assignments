const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, "Player Name is required!"],
        minlength: [2, "Player Name should be at least 2 characters."]
    },
    position: {
        type: String
    }
}, {timestamps: true});

module.exports.Team = mongoose.model("Team", TeamSchema);