const express = require('express');
const router = express.Router();
const UserRoute = require('../routes/user');
const BlogRoute = require('../routes/blog');

router.use('/user', UserRoute);
router.use('/blog', BlogRoute);

module.exports = router;