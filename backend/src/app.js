const express = require('express');
const app = express();
const authMiddleware = require('./middlewares/authMiddleware');

const appointmentRoutes = require('./routes/appointmentRoutes');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/appointments', authMiddleware, appointmentRoutes);
app.use('/auth', authRoutes);
app.use('/doctor', doctorRoutes);
app.use('/users', authMiddleware, userRoutes);

module.exports = app;
