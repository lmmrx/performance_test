const express = require('express');
const app = express();
const PORT = 8000;

app.get('/api/testing', (req, res) => {
    // Throttle
    const delay = 2000;

    setTimeout(() => {
        res.json({ message: `Response processed: ${req.body}` });
    }, delay);
});

app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
});