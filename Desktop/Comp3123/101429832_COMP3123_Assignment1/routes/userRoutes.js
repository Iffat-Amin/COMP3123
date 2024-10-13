const express = require('express');
const router = express.Router(); // Create a new router instance
const User = require('../models/Users'); // Ensure the User model is imported

// User registration endpoint
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    // Validate request data
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Username, password, and email are required.' });
    }

    try {
       
        const user = new User({ username, password, email });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: 'Email already exists.' });
        }
        res.status(500).json({ message: 'Error creating user.', error });
    }
});

//login

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Validate request data
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        const user = await User.findOne({ username });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

      
        res.status(200).json({
            message: 'Login successful',
            user: { _id: user._id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in.', error });
    }
});


module.exports = router; 
