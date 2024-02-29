const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const stausCode = res.stausCode ? res.stausCode : 500;
  switch (stausCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "frobidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      console.log("No ERROR");
      break;
  }
};

module.exports = errorHandler;
