const express = require('express');
const { createStation, updateStation, getStations } = require('../controllers/stationController');
const router = express.Router();

router.post('/', createStation);
router.put('/:id', updateStation);
router.get('/', getStations);

module.exports = router;
