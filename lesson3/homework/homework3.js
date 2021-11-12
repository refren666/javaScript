// Task 1:
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

/*const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
const arr3 = [10, 20, 'hello', 'world', true];
console.log(arr1, arr2, arr3)*/

// ------------------------------------------------------
// Task 2:
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
/*const array = [];
array[0] = 'jeff';
array[1] = 'mabel';
array[2] = 'christian';
array[3] = 22;
array[4] = false;

console.log(array)*/

// ------------------------------------------------------
// Task 3:
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
/*for (let i = 0; i < 10; i++) {
    document.write(`<div>Text</div>`);
}*/

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*for (let i = 0; i < 10; i++) {
    document.write(`<div>Text ${i}</div>`);
}*/

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
/*let n = 0;

while (n < 20) {
    n++;
    document.write(`<h1>Text</h1>`);
}*/


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*let n = 0;

while (n < 20) {
    n++;
    document.write(`<h1>Text ${n}</h1>`)
}*/

// ------------------------------------------------------
// Task 4:
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*const array = [111, 222, 333, 444, 555, 666, 777, 888, 999, 1010];
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}*/

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*const array2 = ['aaa', 'bbb', 'ccc', 'ddd', 'fff', 'ggg', 'eee', 'hhh', 'iii', 'kkk'];

for (let i = 0; i < array2.length; i++) {
    console.log(array2[i])
}*/

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
/*const array3 = [true, false, 1, 2, 3, 'abc', 'bca', {name: 'Paul', isMarried: true}, [1, 3, 5], 'kkk sss ppp'];

for (let i = 0; i < array3.length; i++) {
    console.log(array3[i])
}*/

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*const array4 = [1, true, 'true', 'false', 2, 3, false, 'a', 'b', true]

for (let i = 0; i < array4.length; i++) {
    if (typeof array4[i] === 'boolean') {
        console.log(array4[i])
    }
}*/

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*const array5 = [1, true, 'true', 'false', 2, 3, false, 'a', 'b', true]

for (let i = 0; i < array5.length; i++) {
    if (typeof array5[i] === 'number') {
        console.log(array5[i])
    }
}*/

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
/*const array6 = [1, true, 'true', 'false', 2, 3, false, 'a', 'b', true]

for (let i = 0; i < array6.length; i++) {
    if (typeof array6[i] === 'string') {
        console.log(array6[i])
    }
}*/

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// ------------------------------------------------------
// Task 5:
/*const arr = []

arr[0] = 'Mike';
arr[1] = 'Peter';
arr[2] = 'Street, 21';
arr[3] = 20;
arr[4] = true;
arr[5] = false;
arr[6] = {type: 'item', value: 20, amount: 2, available: true};
arr[7] = [111, 222, 333]
arr[8] = 2020;
arr[9] = 3030.2;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}*/

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(i + ' ')
}*/

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(i + ' ')
}*/

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 100; i+=2) {
    console.log(i)
    document.write(i + ' ')
}*/

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*for (let i = 0; i < 100; i++) {
    if (i % 2 === 0 && i !== 0) {
        console.log(i)
        document.write(i + ' ')
    }
}*/

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i)
        document.write(i + ' ')
    }
}*/
