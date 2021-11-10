// Task 1:
// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній
// result.

/*const arr = []
for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 101)
}
console.log(arr)

const result = arr.reduce((acc, num) => acc + num, 0)
console.log(result)*/

// ---------------------------------------------------

// Task 2:
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

/*const book = {
    name: 'To Kill a Mockingbird',
    pages: 281,
    genre: 'Novel'
}*/

// ---------------------------------------------------

// Task 3:
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

/*const book = {
    name: 'Hannibal',
    pages: 484,
    genre: 'Thriller',
    author: 'Thomas Harris'
}*/

// ---------------------------------------------------

// Task 4:
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу
// як окремий об'єкт

/*const books = [
    book1 = {
        name: 'To Kill a Mockingbird',
        pages: 281,
        genre: 'Novel',
        author: 'Harper Lee'
    },

    book2 = {
        name: 'Hannibal',
        pages: 484,
        genre: 'Thriller',
        author: 'Thomas Harris'
    }
]

for (let i = 0; i < books.length; i++) {
    console.log(books[i])
}*/

// ---------------------------------------------------

// Task 5:
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

// Using variables:
/*const height = 23;
const width = 10;
const s = height * width;
console.log(s)*/

// Using function:
/*const s = (height, width) => height * width;
console.log( s(23, 10) );*/

// ---------------------------------------------------

// Task 6:
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//    результат помістіть у змінну v.

// Using variables:
/*const height = 10;
const diameter = 4;
const PI = 3.14;
const v = PI * Math.pow(diameter, 2) * height;
console.log(v)*/

// Using function:
/*const v = (PI, height, diameter) => PI * Math.pow(diameter, 2) * height;
console.log( v(3.14, 10, 4) )*/

// ---------------------------------------------------

// Task 7:
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або
// оператор зведення в ступінь **).

// Using variables:
/*const n = 2;
const m = 4;
const k = Math.sqrt(n ** 2 + m ** 2)
console.log(k)*/

// Using function:
/*const k = (n, m) => Math.sqrt(n ** 2 + m ** 2)
console.log( k(2, 4) )*/


