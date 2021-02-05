const { asyncTryCatch } = require('../middlewares/asyncError');

const {
  avgSpST,
  makePercent,
  avgThirtyPercent
} = require('../controllers/reports.controller.js');

const { error } = require('../middlewares/asyncError');

const { ApiError } = require('../utils/errorHandler');

module.exports = (app) => {

  //Average Listing Selling Price per Seller Type
  app.get('/avgSpSt', asyncTryCatch(avgSpST));

  //Percentual distribution of available cars by Make
  app.get('/makePercent', asyncTryCatch(makePercent));

  //Average price of the 30% most contacted listings
  app.get('/avgThirtyPercent',asyncTryCatch(avgThirtyPercent));
  
  app.use((req, res, next) => {
    // logger.debug('not matched end point request');
    next(new ApiError('Not Found Route...', 404));
  });

  app.use(error);
};
