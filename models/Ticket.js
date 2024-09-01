const mongoose = require('mongoose');
const TicketSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train' },
    fare: Number,
    date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Ticket', TicketSchema);
