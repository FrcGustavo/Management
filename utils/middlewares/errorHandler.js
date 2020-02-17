const { config } = require('../../config');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
}

function logErrors(err, req, res, next) {
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(new Error(''));
  }

  next(err);
}

function errorHandler(err, req, res) {
  const {
    output: { statusCode, payload }
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
};