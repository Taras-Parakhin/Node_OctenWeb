const users = require('../db/users');

function isUserValid(req, res, next) {
    try {
        const {firstName, lastName, email, password, age, city} = req.body;
        const checkEmail = users.some(user => user.email === email);

        if (!firstName || !lastName || !email || !password || !age || !city) {
            throw new Error('All fields must be filled');
        }

        if (checkEmail) {
            throw new Error('This email is already exists');
        }

        if (!email.includes('@')) {
            throw new Error('Not valid email');
        }

        if (password.length < 6) {
            throw new Error('Not valid password');
        }

        next();

    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = isUserValid;