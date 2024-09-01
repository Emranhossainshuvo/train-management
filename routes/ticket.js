const express = require('express');
const { purchaseTicket } = require('../controllers/ticketController');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

router.post('/purchase', authMiddleware, purchaseTicket);

module.exports = router;
