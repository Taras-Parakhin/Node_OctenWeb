// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект

const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const users = [];
let newUsers = [...users];
let userInfo = {};

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'hbs');
app.engine('hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/users', (req, res) => {
    const {age, city} = req.query;

    if (Object.keys(req.query).length) {
        if (age) {
            newUsers = newUsers.filter(user => user.age === age);
        }

        if (city) {
            newUsers = newUsers.filter(user => user.city === city);
        }

        res.render('users', {users: newUsers})
    } else {
        res.render('users', {users})
    }
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params;


    if (users.length && (+id <= users.length && +id > 0)) {
        userInfo = users[id - 1];
        res.render('userInfo', {userInfo})
    } else {
        res.redirect('/notFound')
    }
})

app.get('/sameEmail', (req, res) => {
    res.render('sameEmail')
})

app.post('/login', (req, res) => {
    let sameEmail = false;

    for (const user of users) {
        if (req.body.email === user.email) {
            sameEmail = true;
            break;
        }
    }

    if (sameEmail) {
        res.redirect('/sameEmail')
    } else {
        users.push(req.body);
        res.redirect('/users')
    }
})

app.use((req, res) => {
    res.render('notFound')
})

app.listen(5200, () => {
    console.log('Server has started on PORT 5200')
})

