const express = require('express');
const { createTrain, updateTrain, getTrains } = require('../controllers/trainController');
const router = express.Router();

router.post('/', createTrain);
router.put('/:id', updateTrain);
router.get('/', getTrains);

module.exports = router;
