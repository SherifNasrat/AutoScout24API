/**
 * @description: define custom error deriving from Error to be able to throw new ApiError()
 */
class ApiError extends Error {
  constructor(message, statusCode, details, success = false) {
    super(message);
    Object.assign(this, { statusCode, details, success });
  }
}

module.exports = {
  ApiError,
};
