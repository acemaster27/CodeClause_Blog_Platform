const { userLogin, userSignUp } = require('../services/user');

const Signup = async (req, res) => {
    try{
        const { user, token } = await userSignUp(req);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000,
            sameSite: 'none',
            secure: true
        });
        res.status(201).json({
            message: "User created successfully",
            user
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

const Login = async (req, res) => {
    try {
        const { user, token } = await userLogin(req);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000,
            sameSite: 'none',
            secure: true
        });
        res.status(200).json({
            message: "User logged in successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

};

module.exports = {
    Signup,
    Login
}