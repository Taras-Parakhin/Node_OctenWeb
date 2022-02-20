let users = require('../db/users');

class UserController {
    renderUsers(req, res) {
        if (Object.keys(req.query).length) {
            const filteredUsers = users.filter(user => Object.keys(req.query).every(key => user[key] === req.query[key]));

            res.render('users', {users: filteredUsers});
            return;
        }
        users.length ? res.render('users', {users}) : res.redirect('/login');
    }

    getUserById(req, res) {
        const {id} = req.params;

        if (users.length) {
            const userInfo = users.find(user => user.id === +id);

            userInfo ? res.render('userInfo', {userInfo}) : res.redirect('/notFound');

            return;
        }
        res.redirect('/notFound');
    }

    deleteUser(req, res) {
        const {id} = req.params;

        users = users.filter(user => user.id !== Number(id));
        // users.splice(users.findIndex(user => user.id === Number(id)), 1);

        res.redirect('/users');
    }
}

module.exports = new UserController();
