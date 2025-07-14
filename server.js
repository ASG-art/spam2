const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'online', 
        timestamp: new Date().toISOString(),
        message: 'Web server is running!'
    });
});

app.post('/api/message', (req, res) => {
    const { message } = req.body;
    res.json({ 
        received: message, 
        response: `Echo: ${message}`,
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(port, () => {
    console.log(`Web server running on port ${port}`);
    console.log(`Visit http://localhost:${port} to view the application`);
});