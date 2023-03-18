const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String
},{timestamps: true})

module.exports = mongoose.model("Product", ProductSchema);