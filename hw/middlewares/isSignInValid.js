function isSignInValid(req, res, next) {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            throw new Error('All fields must be filled');
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

module.exports = isSignInValid;