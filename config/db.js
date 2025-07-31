const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error('MONGO_URI not found in .env');
    process.exit(1);
  }

  mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
      console.error('MongoDB connection error:', err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
