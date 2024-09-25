const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// GET /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// GET /user
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Iffat Amin';
    const lastname = req.query.lastname || 'Nabila';
    res.json({ firstname, lastname });
});

// POST /user
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
