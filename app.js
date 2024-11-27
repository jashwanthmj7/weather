const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000; // Use the platform-assigned port, or default to 3000
const HOST = '0.0.0.0'; // Bind to all network interfaces (required for hosting platforms)

app.get('/', (req, res) => {
    res.send('Weather app is running!');
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
