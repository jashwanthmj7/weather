const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000; // Use the platform-assigned port, or default to 3000
const HOST = '0.0.0.0'; // Bind to all network interfaces (required for hosting platforms)

const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve your front-end HTML
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
