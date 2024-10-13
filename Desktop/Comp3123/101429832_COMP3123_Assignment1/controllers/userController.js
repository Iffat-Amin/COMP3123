const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully.', user_id: user._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ status: false, message: 'Invalid Username or Password' });
        }
        // Optional JWT
        const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful.', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
