const validateToken = require('../utils/validateToken');

const isValidated = (req, res, next) => {
    try {
        validateToken(req, res, next);
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    next();
};

module.exports = isValidated;