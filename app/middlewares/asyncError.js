// wrapper function to handle error exception
const asyncTryCatch = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
};

const error = (err, req, res, next) => {
  const { message, details, success } = err;
  const status = err.statusCode || 500;
  res.status(status).json({ message, details, success });
};
module.exports = {
  asyncTryCatch,
  error,
};
