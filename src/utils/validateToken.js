const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

const validateToken = (req, res, next) => {
	try {
		const token = req.cookies.jwt;
		if (!token) {
			return res.status(401).json({
				message: "Unauthorized",
			});
		}
		const user = jwt.verify(token, JWT_SECRET);
		req.user = user;
		next();
	} catch (error) {
		return res.status(401).json({
			message: "Unauthorized",
		});
	}
};

module.exports = validateToken;
