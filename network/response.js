function success(req, res, message, status) {
    res.status(status).json({
        error: false,
        body: message,
    });
}

function error(req, res, message, status) {
    res.status(status).json({
        error: true,
        body: message,
    });
}

module.exports = {
    success,
    error
};