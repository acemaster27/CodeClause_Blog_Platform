const express = require('express');
const router = express.Router();
const { BlogCreate, BlogGet, BlogUpdate, BlogDelete, BlogGetById } = require('../controllers/blog');
const isValidated = require('../middlewares/authentication');

router.post('/write', isValidated, BlogCreate);

router.get('/read', isValidated, BlogGet);
router.get('/read/:id', isValidated, BlogGetById);

router.patch('/update', isValidated, BlogUpdate);
router.delete('/delete', isValidated, BlogDelete);

module.exports = router;