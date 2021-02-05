const { readCSV } = require('./csvHelper');
const path = require('path');

const getData = async () => {
  const [listingsData, contactsData] = await Promise.all([readCSV(path.resolve(__dirname,'listings.csv')), readCSV(path.resolve(__dirname,'contacts.csv'))]);

  return {
    listingsData,
    contactsData
  }
}

module.exports = { getData }
        