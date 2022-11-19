const reviewService = require('../services/review.service');
const myUtil = require('../utils/myutil');

async function createReview(req, res) {
  try {
    const user_id = req.userInfo.id;
    console.log('user_id = ', user_id);
    const { books_id, content } = req.body;
    // id = 게시물의 id
    myUtil.checkDataIsNotEmpty({
      books_id,
      content,
    });
    const result = await reviewService.createReview(user_id, books_id, content);
    res.status(200).json({
      result,
    });
    console.log('COMMENT POSTED');
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
}

const updateReview = async (req, res) => {
  try {
    const user_id = req.userInfo.id;
    const { review_id, content } = req.body;
    myUtil.checkDataIsNotEmpty({
      review_id,
      content,
    });
    const result = await reviewService.updateReview(
      review_id,
      user_id,
      content
    );
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const user_id = req.userInfo.id;
    const { review_id } = req.body;
    myUtil.checkDataIsNotEmpty({
      review_id,
    });
    const result = await reviewService.deleteReview(review_id, user_id);
    res.status(200).json({ message: result });
  } catch (err) {
    console.log(err.message);
    res.status(err.statusCode).json({ message: err.message });
  }
};

module.exports = { createReview, updateReview, deleteReview };
