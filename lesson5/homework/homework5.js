// - створити функцію яка обчислює та повертає площу прямокутника висотою
/*const rectangleArea = (width, height) => width * height;
console.log(rectangleArea(10, 5));*/

// - створити функцію яка обчислює та повертає площу кола
/*const PI = 3.14;

const circleArea = radius => PI * Math.pow(radius, 2);
console.log(circleArea(5));*/

// - створити функцію яка обчислює та повертає площу циліндру
/*const PI = 3.14;
const cylinderArea = (radius, height) => 2 * PI * radius * (height + radius);
console.log(cylinderArea(4, 15));*/

// - створити функцію яка приймає масив та виводить кожен його елемент
/*const array = [10, 20, 30, 40, 50];

const arrayLogger = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return arr;
}
arrayLogger(array);*/

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
/*const paragraphCreator = text => document.write(`<p>${text}</p>`);
paragraphCreator('Bye world');*/

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
/*const listCreator = text => {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}
listCreator('Bye World');*/

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*const adaptiveListCreator = (text, listSize) => {
    document.write('<ul>');
    for (let i = 0; i < listSize; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
adaptiveListCreator('Bye world', 100);*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*const primitiveArray = [12, 42, 53, 23, 44, 51, true, 'boolean', false, 'string', 'array'];

const listFromArray = arr => {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}
listFromArray(primitiveArray);*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

/*const car = [
    {id: 1, model: 'BMW', price: 45000},
    {id: 2, model: 'Porsche', price: 65000},
    {id: 3, model: 'Toyota', price: 40000},
    {id: 4, model: 'Nissan', price: 30000},
];

const itemsLogger = arr => {
    for (let i = 0; i < arr.length; i++) {
        document.write('<div>');
        for (let key in arr[i]) {
            document.write(`<p>${key}: ${arr[i][key]}</p>`);
        }
        document.write('<div>');
        document.write('**************************************');
    }
}
itemsLogger(car);*/
