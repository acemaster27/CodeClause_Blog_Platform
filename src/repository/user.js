const User = require("../models/user");

const createUser = async (req) => {
	try {
		const { fullName, email, password } = req.body;
		const user = await User.create({
			fullName,
			email,
			password,
		});
		return user;
	} catch (error) {
		throw new Error(error);
	}
};

const getUser = async (req) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		return user;
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = {
	createUser,
	getUser,
};
