const Listing = require('../models/listing.model.js');
const Contact = require('../models/listingcontact.model.js')
const _ = require('lodash');

//Average Listing Selling Price per Seller Type
exports.avgSpST = async (req, res) => {
  let privateListings = await Listing.aggregate([
    {
      $group: {
        _id: '$seller_type',
        avgPrice: { $avg: '$price' },
      },
    },
    {
      $sort: { avgPrice: -1 },
    },
  ]);
  privateListings = privateListings.map((element) => {
    return {
      seller_type: element['_id'],
      price:
        '€' +
        element['avgPrice'].toLocaleString('es-ES', {
          minimumFractionDigits: 2,
        }) +
        '-',
    };
  });
  res.status(200).json({ data: privateListings });
};

//Percentual distribution of available cars by Make
exports.makePercent = async (req, res) => {
  const total = await Listing.countDocuments();
  let makePercentage = await Listing.aggregate([
    { $group: { _id: { make: '$make' }, count: { $sum: 1 } } },
    {
      $project: {
        count: -1,
        percentage: {
          $concat: [
            {
              $substr: [
                {
                  $multiply: [
                    { $divide: ['$count', { $literal: total }] },
                    100,
                  ],
                },
                0,
                2,
              ],
            },
            '',
            '%',
          ],
        },
      },
    },
    { $sort: { count: -1 } },
  ]);
  res.status(200).json({ data: makePercentage });
};
exports.avgThirtyPercent = async (req,res) => {
  let listingsCount = await Listing.aggregate(
    [
      {$lookup:
        {
          from: Contact.collection.name,
          localField: "id",
          foreignField: "listing_id",
          as: "joinedTable"
        }},
    ]
  );
  //const groupedCount = Math.round(listingsCount.length*0.3);
  //listingsCount=listingsCount.slice(0,groupedCount);

  res.status(200).json({data :listingsCount})
};