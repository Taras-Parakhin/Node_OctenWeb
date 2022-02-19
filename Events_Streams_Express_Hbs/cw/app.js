// Необхідно розширити ваше ДЗ:
// - додайте ендпоінт signIn який буде приймати email і password і якщо все вірно то редірект на сторінку цього
// * хто хоче складніше реалізуйте видалення користувача. Кнопка повинна знаходитись на сторінці з інфою про одного юзера. Після видалення редірект на "/users"

const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'hbs');
app.engine('hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

let users = [];
let userInfo = {};
let userId = 0;
let error = '';

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    const {age, city} = req.query;

    if (Object.keys(req.query).length) {
        let newUsers = [...users];

        if (age) {
            newUsers = newUsers.filter(user => user.age === age);
        }

        if (city) {
            newUsers = newUsers.filter(user => user.city === city);
        }

        res.render('users', {users: newUsers});
        return;
    }

        res.render('users', {users});
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;

    userId = +id;

    if (users.length) {
        userInfo = users.find(user => user.id === +id);

        userInfo ? res.render('userInfo', {userInfo}) : res.redirect('/notFound');

        return;
    }
    res.redirect('/notFound');
});

app.post('/login', (req, res) => {
    const sameEmail = users.some(user => user.email === req.body.email);

    if (sameEmail) {
        error = 'This email is already exists';
        res.redirect('/error');
        return;
    }
        users.push({id: users.length ? users[users.length - 1].id + 1 : 1, ...req.body});
        res.redirect('/users');
});

app.get('/signIn', (req, res) => {
    res.render('signIn');
});

app.post('/signIn', (req, res) => {
    if (Object.keys(req.body).length === 2 && users.length) {
        const {email, password} = req.body;
        const user = users.find(user => user.email === email && user.password === password);
        user ? res.redirect(`/users/${user.id}`) : res.redirect('/notFound');
        return;
    }
        res.redirect('/notFound');
});

app.delete('/users/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter(user => user.id !== userId);

    res.redirect('/users');
})

app.get('/error', (req, res) => {
    res.render('error', {error});
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(6200, () => {
    console.log('Server has started on PORT 6200');
});

