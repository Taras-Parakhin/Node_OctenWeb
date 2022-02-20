const users = require('../db/users');

class SignInController {
    renderSignIn(req, res) {
        res.render('signIn');
    }

    findUser(req, res) {
        const {email, password} = req.body;
        const user = users.find(user => user.email === email && user.password === password);

        user ? res.redirect(`/users/${user.id}`) : res.redirect('/notFound');
    }
}

module.exports = new SignInController();