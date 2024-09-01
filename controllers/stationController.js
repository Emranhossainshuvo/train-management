exports.createStation = async (req, res) => {
    const { name, location } = req.body;
    try {
        const station = new Station({ name, location });
        await station.save();
        res.status(201).json(station);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};