// Task 1:
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому
//  3 і більше елементи. Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

/*let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    console.log('Це великий масив, в якому 3 і більше елементи.')
} else {
    console.log('Це маленький масив, в якому менше 3-х елементів')
}*/

// --------------------------------------------------------------------------
// Task 2:
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
// Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
/*const num1 = 7;
const num2 = 10;
const num3 = 5;

if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
    console.log(`${num1} is average number`);
} else if ((num2 > num1 && num2 < num3) || (num1 > num2 && num3 < num2)) {
    console.log(`${num2} is average number`)
} else {
    console.log(`${num3} is average number`)
}*/

// --------------------------------------------------------------------------
// Task 3:
// - Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }

/*const a = 2;
const b = 1;
let result = a + b < 4 ? 'Мало' : 'Багато';
console.log(result);*/

// --------------------------------------------------------------------------
// Task 4:
//  - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// Method 1:
/*let number = -100;

let whatNumber = number > 0 && number < 101 ? 'positive'
    : number > -101 && number < 0 ? 'negative'
        : number === 0 ? 'null'
            : 'invalid value'

console.log(whatNumber)*/

// Method 2:
let number = 0;
if (number > 0 && number < 101) {
    console.log('positive')
} else if (number > -101 && number < 0) {
    console.log('negative')
} else if (number === 0) {
    console.log('null')
} else {
    console.log('invalid value, try number between -100 and 100')
}