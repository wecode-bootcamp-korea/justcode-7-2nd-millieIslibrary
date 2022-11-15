const express = require('express');
const router = express.Router();

const reviewRouter = require('./review.router');

router.use('/review', reviewRouter);

module.exports = router;
