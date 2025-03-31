require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./routes/menu');

const app = express();
app.use(express.json());

// Kết nối MongoDB mà không cần các tùy chọn deprecated
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/menu', menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));