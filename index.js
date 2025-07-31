require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routers/studentroutes.js');
const courseRoutes = require('./routers/courseroutes.js');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Port from .env or fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
