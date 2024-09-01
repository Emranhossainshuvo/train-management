const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema({
    name: String,
    stops: [{
        station: { type: mongoose.Schema.Types.ObjectId, ref: 'Station' },
        arrivalTime: Date,
        departureTime: Date,
    }],
});
module.exports = mongoose.model('Train', TrainSchema);