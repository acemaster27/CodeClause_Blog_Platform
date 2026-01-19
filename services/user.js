const { createUser, getUser } = require("../repository/user");
const bcrypt = require("bcrypt");
const generateAuthToken = require("../utils/createToken");

const userSignUp = async (req) => {
	try {
		const { fullName, email, password } = req.body;
		if (!fullName || !email || !password) {
			throw new Error("All fields are required");
		}
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		req.body.password = hashedPassword;
		const user = await createUser(req);
        const token = generateAuthToken(user);
        return { user, token };
	} catch (error) {
		throw new Error(error);
	}
};

const userLogin = async (req) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			throw new Error("All fields are required");
		}
		const user = getUser(req);
		if (!user) {
			throw new Error("User not found");
		}
		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if (!isPasswordCorrect) throw new Error("Incorrect password");
		const token = generateAuthToken(user);
        return { user, token };
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = {
	userSignUp,
	userLogin,
};
