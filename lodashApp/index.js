const getAverage = require('./calculations/averageThirty');

const { getData } = require('./util/data');

(async () => {
  const { contactsData, listingsData } = await getData();

  console.log({ average: getAverage({ contactsData, listingsData }) });
})();
