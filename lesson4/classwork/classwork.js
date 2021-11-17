// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*function minNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(minNumber(40, 15, 10));*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*function maxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(maxNumber(100, 101, 92));*/

// - створити функцію яка повертає найбільше число з масиву
/*const arrayOfNumbers = [12, 42, 12, 32, 11, 22, 52];

function arrayMax(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(arrayMax(arrayOfNumbers));*/

// - створити функцію яка повертає найменьше число з масиву
/*const arrayOfNumbers = [12, 42, 12, 32, 11, 22, 52];

function arrayMinNumber(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log(arrayMinNumber(arrayOfNumbers));*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].