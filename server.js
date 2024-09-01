const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const stationRoutes = require('./routes/station');
const trainRoutes = require('./routes/train');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the Train Service Management System');
});
// api endpoints
app.use('/api/users', userRoutes);
app.use('/api/stations', stationRoutes);
app.use('/api/trains', trainRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));