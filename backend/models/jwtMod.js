const mongoose = require('mongoose');

// created fro jwt authentication
const jwtSchema = new mongoose.Schema({
    email: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
    }
})

const jwtModel = mongoose.model("jwts", jwtSchema);
module.exports = jwtModel;