// First task:
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

/*let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;

console.log(a, b, c, d, e, f, g, h, i, j, k, l, m)
alert(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`)
document.write(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`)*/

// ---------------------------------------------------------

// Second task:
// Переприсвоїти кожній змінній з завдання значення на довільне.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

/*a = 'lorem'
b = 'ipsum'
c = 'dolor'
d = 'sit'
e = 'amet'
f = 20
g = f + 20
h = g++
i = '100500'
j = -2.7
k = f + j
l = false
m = true

console.log(a, b, c, d, e, f, g, h, i, j, k, l, m)
alert(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`)
document.write(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`) */

// ---------------------------------------------------------

// Third task:
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

/*const firstName = 'Denys'
const lastName = 'Shvaiber'
const middleName = 'Ivanovych'

const person = `${lastName} ${firstName} ${middleName}`

console.log(person)*/

// ---------------------------------------------------------

// Fourth task:
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

/*const name = prompt('Enter your name: ')
const middleName = prompt('Enter your middle name: ')
const age = prompt('Enter your age: ')

console.log(`Вітаю ${name} ${middleName}. Тобі ${age} років.`)*/

// ---------------------------------------------------------

// Fifth task:
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

/*let a = 100;
let b = '100';
let c = true;

console.log(typeof a, typeof b, typeof c)*/

// ---------------------------------------------------------

// Sixth task:
// Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!

/*5 < 6 -> true
5 > 6 -> false
5 >= 6 -> false
5 === 6 -> false
10 === 10 -> true
10 <= 10 -> true
10 !== 10 -> false
10 > 10 -> false
10 < 10 -> false
123 === '123' -> false
123 == '123' -> true*/

// ---------------------------------------------------------

// Seventh task:
// Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

/*let str = "20";
let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");*/

/*
Відповідь: при додаванні двох примітивів, один з
яких це стрічка(string) а другий це номер(number), стрічка буде мати
вищий пріоритет і перетворить номер у стрічку, тому результат буде 205

У всіх інших випадках (відніманні, множенні і діленні), тип змінних
буде перевизначатися на number, і тому будуть виконуватися звичайні
математичні операції. При відніманні буде 15, при множенні - 40, при
діленні - 10.
*/
