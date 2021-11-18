// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*const minValue = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(minValue(1, 7, 4));*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*const maxValue = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(maxValue(42, 16, 22));*/

// - створити функцію яка повертає найбільше число з масиву
/*const arrayOfNumbers = [1, 3, 5, 6, 2, 12, 9];

const arrayMaxValue = arr => {
    let maxValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}

console.log(arrayMaxValue(arrayOfNumbers));*/

// - створити функцію яка повертає найменьше число з масиву
/*const arrayOfNumbers = [3, 1, 5, 6, 2, 12, 9];

const arrayMinValue = arr => {
    let minValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}

console.log(arrayMinValue(arrayOfNumbers));*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*const arrayOfNumbers = [3, 1, 5, 6, 2, 12, 9];

const summarizer = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(summarizer(arrayOfNumbers));*/

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*const arrayOfNumbers = [3, 1, 5, 6, 2, 12, 9];

const averageValue = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(averageValue(arrayOfNumbers));*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*const minAndMax = (...args) => {
    let max = args[0];
    let min = args[0];
    for (let i = 0; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        } else if (args[i] < min) {
            min = args[i];
        }
    }
    console.log('Max: ', max);
    return min;
}

console.log('Min: ', minAndMax(12, 42, 22, 11, 100));*/

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
/*const plsAddMeFriends = [];

const friendsAdder = (arr, size) => {
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}
console.log(friendsAdder(plsAddMeFriends, 100));*/

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
/*const emptiness = [];

const arrayFiller = (arr, size, limit) => {
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * limit);
    }
    return arr;
}

console.log(arrayFiller(emptiness, 100, 21));*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// Method 1:
/*const array = [1,2,3];
const reversedArray = [];

const reverser = (targetArray, sourceArray) => {
    for (let i = 0, j = sourceArray.length - 1; i < sourceArray.length, j >= 0; i++, j--) {
        targetArray[i] = sourceArray[j];
    }
}

reverser(reversedArray, array);
console.log(reversedArray);*/

// Method 2:
/*const array = [1,2,3];
const newArray = [];

const arrayReverser = (sourceArray, targetArray) => {
    for (let i = sourceArray.length - 1; i >= 0; i--) {
        targetArray.push(sourceArray[i]);
    }
}

arrayReverser(array, newArray);
console.log(newArray);*/
