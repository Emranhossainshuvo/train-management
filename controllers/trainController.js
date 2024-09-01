const Train = require('../models/Train');


exports.createTrain = async (req, res) => {
    const { name, stops } = req.body;
    try {
        const train = new Train({ name, stops });
        await train.save();
        res.status(201).json(train);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateTrain = async (req, res) => {
    const { id } = req.params;
    const { name, stops } = req.body;
    try {
        const train = await Train.findByIdAndUpdate(id, { name, stops }, { new: true });
        res.json(train);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

