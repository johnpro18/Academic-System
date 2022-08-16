const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3500;
const URI = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(URI);

// Routes
const studentInfosRouter = require('./routes/studentinfos.route');
const courseInfosRouter = require('./routes/courseinfos.route');
const lecturerInfosRouter = require('./routes/lecturerinfos.route');

app.use('/studentinfos', studentInfosRouter);
app.use('/courseinfos', courseInfosRouter);
app.use('/lecturerinfos', lecturerInfosRouter);

// Establish Connection
mongoose.connection.once('open', () => {
    console.log('Database Connection Established Successfully');
    app.listen(PORT, () => {
        console.log('Server is Currently Running on Port:', PORT);
    });
});
