const users = require('../db/users');

class LoginController {
    renderLogin(req, res) {
        res.render('login');
    }

    addUsers(req, res) {
        users.push({id: users.length ? users[users.length - 1].id + 1 : 1, ...req.body});

        res.redirect('/users');
    }
}

module.exports = new LoginController();