const User = require('../models/User');

exports.addFunds = async (req, res) => {
    const { amount } = req.body;
    try {
        const user = await User.findById(req.user.id);
        user.wallet += amount;
        await user.save();
        res.json({ balance: user.wallet });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getBalance = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json({ balance: user.wallet });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
