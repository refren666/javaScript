// - створити функцію яка обчислює та повертає площу прямокутника висотою
/*function squareArea(height, width) {
    return height * width
}

console.log(squareArea(5, 10));*/

// - створити функцію яка обчислює та повертає площу кола
/*function circleArea(PI, radius) {
    return PI * Math.pow(radius, 2)
}

console.log(circleArea(3.14, 6))*/

// - створити функцію яка обчислює та повертає площу циліндру
/*function cylinderArea(PI, radius, height) {
    return 2 * PI * radius * (height + radius)
}

console.log(cylinderArea(3.14, 6, 12))*/

// - створити функцію яка приймає масив та виводить кожен його елемент
/*const array = [1, 4, 2, 41, 24, 11];

function logger(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

logger(array)*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*function writer(text) {
    document.write(`<p>${text}</p>`);
}

writer('Sample text')*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*function list(text) {
    document.write('<ul>')
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write('</ul>')
}

list('hello world')*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*function list(text, size) {
    document.write('<ul>')
    for (let i = 0; i < size; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

list('hello world', 3)*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*const array = [12, 'string', 'boolean', true, false, 42, 15]

function list(arr) {
    document.write('<ul>')
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write('</ul>')
}

list(array)*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*const person = [
    {id: 1, name: 'John', age: 20},
    {id: 2, name: 'Jeff', age: 22},
    {id: 3, name: 'Lorens', age: 25},
    {id: 4, name: 'Mario', age: 18},
]

function builder(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write('<div>')
        for (let key in arr[i]) {
            document.write(`<p>${key} - ${arr[i][key]}</p>`)
        }
        document.write('</div>')
        document.write('-----------------------------')
    }
}

builder(person)*/
