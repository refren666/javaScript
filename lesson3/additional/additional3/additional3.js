// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// ****************************************************

// I USED THIS EMPTY ARRAY FOR EVERY EXERCISE IN TASK 1
// let array = [];

//*****************************************************

// a. заповнити його 50 парними числами за допомоги циклу.
/*let number = 0;
for (let i = 0; i < 50; i++) {
    array[i] = number += 2;
}
console.log(array)*/

// b. заповнити його 50 непарними числами за допомоги циклу.
/*let number = -1;
for (let i = 0; i < 50; i++) {
    array[i] = number += 2;
}
console.log(array)*/

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
/*for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 101)
}
console.log(array)*/

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
/*for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 724) + 8
}
console.log(array)*/

// ********************************************************************************************

// 2. Вивести за допомогою console.log кожен третій елемент
/*const array2 = []
let number = 0;
for (let i = 0; i < 20; i++) {
    array2[i] = number += 1;
}
console.log(array2)

for (let i = 2; i < array2.length; i += 3) {
    console.log(array2[i])
}*/

// ********************************************************************************************

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
/*const array3 = []
let number = 0;
for (let i = 0; i < 50; i++) {
    array3[i] = number += 1;
}
console.log(array3)

for (let i = 2; i < array3.length; i += 3) {
    if (array3[i] % 2 === 0) {
        console.log(array3[i])
    }
}*/

// ********************************************************************************************

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
/*const array4 = []
let number = 0;
for (let i = 0; i < 50; i++) {
    array4[i] = number += 1;
}

const newArray = [];
for (let i = 2; i < array4.length; i += 3) {
    if (array4[i] % 2 === 0) {
        newArray.push(array4[i])
    }
}
console.log(newArray)*/

// ********************************************************************************************

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
/*const array = [1, 2, 3, 5, 7, 9, 56, 8, 67];

for (let i = 0; i < array.length; i++) {
    if (array[i + 1] % 2 === 0) {
        console.log(array[i])
    }
}*/

// ********************************************************************************************

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

/*const array = [100,250,50,168,120,345,188];
let arraySum = 0;
let averageCheck = 0;

for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
}
averageCheck = arraySum / array.length

console.log(averageCheck)*/

// ********************************************************************************************

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/*const array = [];
for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 101)
}
console.log(array)

const newArray = []
for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * 5
}

console.log(newArray)*/

// ********************************************************************************************

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

/*const array = ['Simpson', 'Griffin', 25, 12, '55', true, 'false', false, [5, 10, 15], 1000];
const newArray = [];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        newArray.push(array[i])
    }
}
console.log(newArray)*/

// ********************************************************************************************

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = []

for (let user of usersWithId) {
    for (let key in usersWithId) {
        console.log(usersWithId[key]['id'] === 1)
    }

}

console.log(usersWithCities)

// ********************************************************************************************

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

/*const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}*/

// ********************************************************************************************

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.
/*const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
}
console.log(newArr)*/

// ********************************************************************************************

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
/* const array = ['a', 'b', 'c'];
let word = '';

for (let i = 0; i < array.length; i++) {
    word += array[i];
}
console.log(word)*/

// За допомогою циклу while зібрати всі букви в слово.
/*const array = ['a', 'b', 'c'];
let word = '';
let i = 0;
while (i < array.length) {
    word += array[i];
    i++;
}
console.log(word)*/

// За допомогою циклу for of зібрати всі букви в слово.
/*const array = ['a', 'b', 'c'];
let word = '';

for (let letter of array) {
    word += letter
}

console.log(word)*/
