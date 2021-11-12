// Task 1:
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

// Method 1:
/*const firstNum = 10;
const secondNum = 40;

if (firstNum > secondNum) {
    console.log(firstNum)
} else if (secondNum === firstNum) {
    console.log('numbers are equal')
} else {
    console.log(secondNum)
}*/

// const user = [19, 82]

// Method 2:
/*function findMax(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
console.log(findMax(user))*/

// Method 3:
/*const maxNumber = Math.max(...user)
console.log(max)*/

// ----------------------------------------------------------
// Task 2:
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// Method 1:
/*const appartmentNumber = prompt('Введіть номер квартири (від 1 до 90): ')

if (appartmentNumber >= 1 && appartmentNumber <= 20) {
    console.log("Ваша квартира находиться у першому під'їзді")
} else if (appartmentNumber >= 21 && appartmentNumber <= 48) {
    console.log("Ваша квартира находиться у другому під'їзді")
} else if (appartmentNumber >= 49 && appartmentNumber <= 90) {
    console.log("Ваша квартира находиться у третьому під'їзді")
}*/

// Method 2:
/*const appartmentNumber = +prompt('Введіть номер квартири (від 1 до 90): ')

if (appartmentNumber <= 0) {
    console.log('Invalid number')
} else if (appartmentNumber <= 20) {
    console.log("Ваша квартира находиться у першому під'їзді")
} else if (appartmentNumber <= 48) {
    console.log("Ваша квартира находиться у другому під'їзді")
} else if (appartmentNumber <= 90) {
    console.log("Ваша квартира находиться у третьому під'їзді")
} else {
    console.log('Invalid number')
}
*/

// ----------------------------------------------------------
// Task 3:
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО

/*const number = +prompt('Enter number: ')
if (number === 10) {
    console.log('ВІРНО')
} else {
    console.log('НЕВІРНО')
}*/

// ----------------------------------------------------------
// Task 4:
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

/*let x;
// x = 10;
// x = 'sample text'
// x = true
// x = []
// x = {}

if (typeof x === 'number') {
    console.log(1)
} else if (typeof x === 'string') {
    console.log(2)
} else if (typeof x === 'boolean' || typeof x === 'object' || Array.isArray(x)) {
    console.log(3)
}*/

// ----------------------------------------------------------
// Task 5:
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

/*const temperature = 23;

if (temperature > 9 && temperature < 23) {
    console.log('йдемо ВЧИТИСЯ')
} else {
    console.log('сидимо вдома і вчимося ОНЛАЙН')
}*/

// Task 6:
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що
// число не вірне ... .

/*const survey = prompt('Enter value from 1 to 5: ')

switch (survey) {
    case '1':
        console.log('You won a car!')
        break
    case '2':
        console.log('You won a motorbike!')
        break
    case '3':
        console.log('You won a smartphone!')
        break
    case '4':
        console.log('You won the headphones!')
        break
    case '5':
        console.log('You won a book!')
        break
    default:
        console.log("Number is incorrect, try again.")
}*/

