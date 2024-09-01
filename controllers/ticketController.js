const Ticket = require('../models/Ticket');
const Train = require('../models/Train');
const User = require('../models/User');

exports.purchaseTicket = async (req, res) => {
    const { trainId, fare } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (user.wallet < fare) {
            return res.status(400).json({ error: 'Insufficient funds' });
        }

        user.wallet -= fare;
        await user.save();

        const ticket = new Ticket({ user: req.user.id, train: trainId, fare });
        await ticket.save();

        res.status(201).json(ticket);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
