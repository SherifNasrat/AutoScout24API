const mongoose = require('mongoose');

const ListingSchema = mongoose.Schema({
    listing_id: Number,
    make: String,
    price: Number,
    mileage: Number,
    seller_type:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Listing', ListingSchema);
