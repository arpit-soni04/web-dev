const { default: mongoose } = require("mongoose");


// Creating schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    images: Object,
    description: String,
    thumbnail: String,
    status: {
        type: Boolean,
        default: true
    }
});

// connecting schema to collection
const Products = mongoose.model('products', productSchema);

module.exports = {
    Products
}