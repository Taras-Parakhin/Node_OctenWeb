//const fs = require('fs');
//const path = require("path");

// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// })
//
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// })

// ======================================================================================

// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка

// const onlineUsers = [
//     {name: 'Andrij', age: 22, city: 'Lviv'},
//     {name: 'Olia', age: 18, city: 'Kyiv'}
// ];
//
// const inPersonUser = [
//     {name: 'Oleg', age: 24, city: 'Rivne'},
//     {name: 'Kira', age: 20, city: 'Odessa'}
// ]
//
// for (const user of onlineUsers) {
//     fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), `NAME: ${user.name}\nAGE: ${user.age}\nCITY: ${user.city}\n\n`, {flag: 'a'}, (err) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//     })
// }
//
// for (const user of inPersonUser) {
//     fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `NAME: ${user.name}\nAGE: ${user.age}\nCITY: ${user.city}\n\n`, {flag: 'a'}, (err) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//     })
// }

// ==========================================================================================

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)

// const changeData = () => {
//
//     fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), (err, dataOnline) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//
//         fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${dataOnline}`, (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//         })
//     })
//
//     fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), (err, dataOnline) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//
//         fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${dataOnline}`, (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//         })
//     })
// }
//
// changeData()