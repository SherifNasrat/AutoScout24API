const mongoose = require('mongoose');

const ListingContactSchema = mongoose.Schema({
    id:Number,
    listing_id:Number,
    contact_date:String
}, {
    timestamps: true
});

module.exports = mongoose.model('ListingContact', ListingContactSchema);
