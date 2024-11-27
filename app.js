const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weather');

dotenv.config();
const app = express();

// Middleware
app.use(express.static('public'));
app.use('/api/weather', weatherRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
