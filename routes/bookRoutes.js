const express = require('express');
const { createBook, getBooks, getBookById, searchBooks } = require('../controllers/bookController');
const auth = require('../middleware/auth');
const { createReview } = require('../controllers/reviewController');

const router = express.Router();

router.post('/books', auth, createBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.get('/search', searchBooks);
router.post('/books/:id/reviews', auth, createReview);

module.exports = router;
