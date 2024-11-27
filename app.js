const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const weatherRoutes = require('./routes/weather');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use the weather route
app.use('/weather', weatherRoutes);

// Home route (optional for serving your index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
