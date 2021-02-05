const _ = require('lodash');

const getAverage = ({ listingsData, contactsData }) => {
  const groupedData = _.groupBy(contactsData, 'listing_id');

  const result = Object.entries(groupedData).map(([key, list]) => ({
    id: key,
    length: list.length,
  }));

  const sortedResult = _.sortBy(result, ['length']);

  const finalResult = _.takeRight(
    sortedResult,
    Math.round(sortedResult.length * 0.3)
  );

  const data = finalResult.map(({ id: listId }) =>
    Number(listingsData.find(({ id }) => id === listId).price)
  );

  return _.sum(data) / data.length;
};

module.exports = getAverage;
