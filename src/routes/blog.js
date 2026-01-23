const express = require('express');
const router = express.Router();
const { BlogCreate, BlogGet, BlogGetAll } = require('../controllers/blog');
const isValidated = require('../middlewares/authentication');
const upload = require('../middlewares/upload');


router.post('/write', isValidated, upload.single('coverImage'), BlogCreate);

router.get('/read', isValidated, BlogGet);
router.get('/read/:id', isValidated, BlogGetAll);

module.exports = router;