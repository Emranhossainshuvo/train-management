const mongoose = require('mongoose');
const StationSchema = new mongoose.Schema({
    name: String,
    location: String,
});
module.exports = mongoose.model('Station', StationSchema);
