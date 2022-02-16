const fs = require('fs');
const path = require("path");

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

// fs.writeFile(path.join(__dirname, 'file.txt'), 'SOME DATA', (err) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }

//     fs.readFile(path.join(__dirname, 'file.txt'), (err, data) => {
//         if (err) {
//             console.log(err)
//             throw err
//         }

//         fs.writeFile(path.join(__dirname, 'file1.txt'), `${data}`, (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err
//             }
//         })
//     })
// })

// =========================================================

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell

// fs.readFile(path.join(__dirname, 'file.txt'), (err, data) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }

//     fs.mkdir(path.join(__dirname, 'direct'), (err) => {
//         if (err) {
//             console.log(err)
//             throw err
//         }

//         fs.writeFile(path.join(__dirname, 'direct', 'file2.txt'), `${data}`, (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err
//             }

//             fs.unlink(path.join(__dirname, 'file.txt'), (err) => {
//                 if (err) {
//                     console.log(err)
//                     throw err
//                 }
//             })
//         })
//     })
// })

// ========================================================

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

const createData = () => {
    for (let i = 0; i < 3; i++) {
        fs.mkdir(path.join(__dirname, 'main', `direct${i}`), (err) => {
            if (err) {
                console.log(err)
                throw err
            }
        })

        fs.writeFile(path.join(__dirname, 'main', `file${i}.txt`), `${i % 2 ? '' : 'some data'}`, (err) => {
            if (err) {
                console.log(err)
                throw err
            }
        })
    }
}

createData()

const editData = () => {
    fs.readdir(path.join(__dirname, 'main'), (err, data) => {
        if (err) {
            console.log(err)
            throw err
        }

        data.forEach(item => {
            if (item.includes('.')) {
                fs.truncate(path.join(__dirname, 'main', `${item}`), (err) => {
                    if (err) {
                        console.log(err)
                        throw err
                    }
                })
            } else {
                fs.rename(path.join(__dirname, 'main', `${item}`), path.join(__dirname, 'main', `new${item}`), (err) => {
                    if (err) {
                        console.log(err)
                        throw err
                    }
                })
            }
        })
    })
}

editData()