const { readCSV } = require('./csvreader');
const path = require('path');
const mongoose = require('mongoose');
const ListingModel = require('../models/listing.model');
const ContactModel = require('../models/listingcontact.model');

const getData = async () => {
  const [listingsData, contactsData] = await Promise.all([
    readCSV(path.resolve(__dirname, 'listings.csv')),
    readCSV(path.resolve(__dirname, 'contacts.csv')),
  ]);

  return {
    listingsData,
    contactsData,
  };
};

const seedData = async () => {
  const data = await getData();
  await Promise.all([
    ...data.contactsData.map((element) => {
      return ContactModel.findOneAndUpdate(
        { id: element.id},
        {
          listing_id: element.listing_id,
          contact_date: element.contact_date,
        },
        { upsert: true }
      ).exec();
    }),
    ...data.listingsData.map((element) => {
      return ListingModel.findOneAndUpdate(
        { listing_id: element.id },
        { ...element, listing_id: element.id },
        { upsert: true }
      ).exec();
    })
  ]);
};

module.exports = { seedData};
