// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// Fist way:
/*function xxx() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments.length === 1) {
            return arguments[i];
        } else if (arguments.length === 2) {
            sum += arguments[i];
        }
    }
    return sum;
}

console.log(xxx(100));
console.log(xxx(72, 92));*/

// Second way:
/*function xxxx(a, b) {
    if (b) {
        return a + b;
    } else if (a) {
        return a;
    } else {
        return 0;
    }
}

console.log(xxxx(0));*/

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

/*const firstArray = [1,2,3,4];
const secondArray = [2,3,4,5];
const emptyArray = [];

function arraysSum (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++){
        emptyArray[i] = arr1[i] + arr2[i];
    }
    return emptyArray;
}

let sum = arraysSum(firstArray, secondArray);
console.log(sum)*/

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
/*const person = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
];

let keysArray = [];

function keysLogger(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            keysArray.push(key);
        }
    }
    return keysArray;
}

console.log(keysLogger(person))*/

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
/*const person = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
];

let valuesArray = [];

function valuesLogger(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            valuesArray.push(arr[i][key]);
        }
    }
    return valuesArray;
}

console.log(valuesLogger(person))*/

