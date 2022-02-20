const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'hbs');
app.engine('hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes);

// let users = [];
// let userInfo = {};
// let userId = 0;
// let error = '';

// app.get('/login', (req, res) => {
//     res.render('login');
// });

// app.post('/login', (req, res) => {
//     const sameEmail = users.some(user => user.email === req.body.email);
//
//     if (sameEmail) {
//         error = 'This email is already exists';
//
//         res.redirect('/error');
//
//         return;
//     }
//     users.push({id: users.length ? users[users.length - 1].id + 1 : 1, ...req.body});
//     res.redirect('/users');
// });
//
// app.get('/users', (req, res) => {
//     if (Object.keys(req.query).length) {
//         const filteredUsers = users.filter(user => Object.keys(req.query).every(key => user[key] === req.query[key]));
//
//         res.render('users', {users: filteredUsers});
//         return;
//     }
//
//     res.render('users', {users});
// });

// app.get('/users/:id', (req, res) => {
// const {id} = req.params;
//
//
// if (users.length) {
//     userInfo = users.find(user => user.id === +id);
//
//     userInfo ? res.render('userInfo', {userInfo}) : res.redirect('/notFound');
//
//     return;
// }
// res.redirect('/notFound');
// });



// app.get('/signIn', (req, res) => {
//     res.render('signIn');
// });

// app.post('/signIn', (req, res) => {
//     if (Object.keys(req.body).length === 2 && users.length) {
//         const {email, password} = req.body;
//         const user = users.find(user => user.email === email && user.password === password);
//
//         user ? res.redirect(`/users/${user.id}`) : res.redirect('/notFound');
//
//         return;
//     }
//     res.redirect('/notFound');
// });

// app.post('/users/:id', (req, res) => {
//     const {id} = req.params;

//     users = users.filter(user => user.id !== id)
//     res.redirect('/users');
// });

// app.delete('/users/:id', (req, res) => {
//     const {id} = req.params;
//
//     users = users.filter(user => user.id !== id);
//
//     res.redirect('/users');
// });

// app.get('/error', (req, res) => {
//     res.render('error', {error});
// });

// app.use((req, res) => {
//     res.render('notFound');
// });

app.listen(8200, () => {
    console.log('Server has started on PORT 8200');
});