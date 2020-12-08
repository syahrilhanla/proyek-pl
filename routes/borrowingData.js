const express = require('express');
const router = express.Router();
const { getBorrowingData, addBorrowingData, deleteBorrowingData, updateBorrowingData } =
    require('../controllers/borrowingDataController');

router
    .route('/')
    .get(getBorrowingData)
    .post(addBorrowingData);

router
    .route('/:id')
    .put(updateBorrowingData)
    .delete(deleteBorrowingData);

module.exports = router;