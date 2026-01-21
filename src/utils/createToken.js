const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const generateAuthToken = (user) => {
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);
    return token;
};

module.exports = generateAuthToken;