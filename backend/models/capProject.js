const mongoose = require('mongoose');

const makeSignUpSchema = new mongoose.Schema({
    // firstName: String,
    // lastName: String,
    // email: String,
    // password: String,
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const createModel = mongoose.model("signUpLists", makeSignUpSchema);
module.exports = createModel;