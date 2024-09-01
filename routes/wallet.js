const express = require('express');
const { addFunds, getBalance } = require('../controllers/walletController');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

router.post('/add', authMiddleware, addFunds);
router.get('/balance', authMiddleware, getBalance);

module.exports = router;
