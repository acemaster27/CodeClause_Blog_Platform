const express = require('express');
const router = express.Router();
const { Login, Signup } = require('../controllers/user');


router.post('/signup',Signup);
router.post('/login',Login);

        // const isPasswordCorrect = await bcrypt.compare(password, user.password);
        // if(!isPasswordCorrect)
        //     throw new Error("Incorrect password");
        // const token = user.generateAuthToken();
        // res.cookie('jwt', token, {
        //     httpOnly: true,
        //     maxAge: 3 * 24 * 60 * 60 * 1000
        // });

module.exports = router;