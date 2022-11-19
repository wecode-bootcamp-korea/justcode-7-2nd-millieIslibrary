const express = require('express');

const router = express.Router();

const userRouter = require('./user.router');
const reviewRouter = require('./review.router');
const bookRouter = require('./book.router');
const mw = require('../middlewares/middleware');
const bookDetaliRouter = require('./bookDetail.router');
const addListRouter = require('./addList.router');

router.use('/user', userRouter);
router.use('/review', reviewRouter);
router.use('/books', bookRouter);
router.use('/book-detail', bookDetaliRouter);
router.use('/add-list', addListRouter);

router.use(mw.errorHandler);
module.exports = router;
