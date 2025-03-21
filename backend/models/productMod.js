const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    images: { 
        type: [String], 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    }, 
});

const productModel = mongoose.model("products", ProductSchema);
module.exports = productModel;