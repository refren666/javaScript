// First task:
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
/*const time = Math.floor(Math.random() * 60)
if (time <= 15) {
    console.log('1/4')
} else if (time <= 30) {
    console.log('2/4')
} else if (time <= 45) {
    console.log('3/4')
} else {
    console.log('4/4')
}*/

// -----------------------------------------------------------------

// Second task:
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
/*const day = Math.floor(Math.random() * 31) + 1
if (day <= 10) {
    console.log('1st decade')
} else if (day <= 20) {
    console.log('2nd decade')
} else {
    console.log('3rd decade')
}*/

// -----------------------------------------------------------------

// Third task:
// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
/*let test;
test = true;
test = false;

if (!test) {
    console.log('Невірно')
} else {
    console.log('Вірно')
}*/

// test === true ? console.log('Вірно') : console.log('Невірно')

// -----------------------------------------------------------------

// Fourth task:
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
/*let a;
// a = 1;
// a = 0;
// a = -3;

if (a !== 0 ) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}*/

// -----------------------------------------------------------------

// Fifth task:
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день.
/*const schedule = prompt('Please enter the day of the week from 1 to 7: ');

switch (schedule) {
    case '1':
        console.log('Mathematics');
        break;
    case '2':
        console.log('Biology');
        break;
    case '3':
        console.log('Chemistry');
        break;
    case '4':
        console.log('Informatics');
        break;
    case '5':
        console.log('Literature');
        break;
    case '6':
        console.log('Day off');
        break;
    case '7':
        console.log('Second day off');
        break;
    default:
        console.log('Entered wrong value, try number from 1 to 7')
}*/

// -----------------------------------------------------------------

// Sixth task:
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
/*const year = 365;
if (year % 4 === 0) {
    console.log('Високосний рік');
} else {
    console.log('Невисокосний рік');
}*/

// -----------------------------------------------------------------

// Seventh task:
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

/*const name = prompt('Яка «офіційна» назва JavaScript?')

if (name === 'ECMAScript') {
    console.log('Правильно!')
} else {
    console.log('Не знаєте? ECMAScript!')
}*/
