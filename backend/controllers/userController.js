const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        console.log(` -------------- ${JSON.stringify(req.body)}`);
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        console.log(`Server running on port ${error}`);
        res.status(500).json({ success: false, message: "Failed to book appointment" });
    }
};

exports.getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to retrieve appointments" });
    }
};
