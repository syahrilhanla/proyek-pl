const express = require('express');
const router = express.Router();
const { getBorrowingData, addBorrowingData, deleteBorrowingData } =
    require('../controllers/borrowingDataController');

router
    .route('/')
    .get(getBorrowingData)
    .post(addBorrowingData);

router
    .route('/:id')
    .delete(deleteBorrowingData);

module.exports = router;