// Task 1:
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// перебрати його циклом while

const numberArray = [2,17,13,6,22,31,45,66,100,-18];

/*let i = 0;
while (i < numberArray.length) {
    console.log(numberArray[i]);
    i++;
}*/

// Task 2:
// перебрати його циклом for
/*for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i])
}*/

// Task 3:
// перебрати циклом while та вивести  числа тільки з непарним індексом

/*let i = 0;
while (i < numberArray.length) {
    if (i % 2 === 1) {
        console.log(numberArray[i], i)
    }
    i++;
}*/

// Task 4:
// перебрати циклом for та вивести  числа тільки з непарним індексом
/*for (let i = 0; i < numberArray.length; i++) {
    if (i % 2 === 1) {
        console.log(numberArray[i], i)
    }
}*/

// Task 5:
// перебрати циклом while та вивести  числа тільки парні  значення
/*let i = 0;
while (i < numberArray.length) {
    if (numberArray[i] % 2 === 0) {
        console.log(numberArray[i]);
    }
    i++;
}*/

// Task 6:
// перебрати циклом for та вивести  числа тільки парні  значення
/*for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
        console.log(numberArray[i])
    }
}*/

// Task 7:
// замінити кожне число кратне 3 на слово "okten"
/*for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 3 === 0) {
        numberArray[i] = 'okten'
    }
    console.log(numberArray[i])
}*/

// Task 8:
// вивести масив в зворотньому порядку.
// Method 1:
/*for (let i = numberArray.length - 1; i >= 0; i--) {
    console.log(numberArray[i])
}*/

// Method 2:
// numberArray.reverse().forEach(number => console.log(number))

// Task 9:
// всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1) перебрати його циклом while
/*let i = numberArray.length - 1;
while (i >= 0) {
    console.log(numberArray[i]);
    i--;
}*/

// 2) перебрати його циклом for
/*for (let i = numberArray.length - 1; i >= 0; i--) {
    console.log(numberArray[i]);
}*/

// 3) перебрати циклом while та вивести  числа тільки з непарним індексом
/*let i = numberArray.length - 1;
while (i >= 0) {
    if (i % 2 === 1) {
        console.log(numberArray[i], i)
    }
    i--;
}*/

// 4) перебрати циклом for та вивести  числа тільки з непарним індексом
/*for (let i = numberArray.length; i >= 0; i--) {
    if (i % 2 === 1) {
        console.log(numberArray[i], i)
    }
}*/

// 5) перебрати циклом while та вивести  числа тільки парні  значення
/*let i = numberArray.length - 1;
while (i >= 0) {
    if (numberArray[i] % 2 === 0) {
        console.log(numberArray[i])
    }
    i--;
}*/

// 6) перебрати циклом for та вивести  числа тільки парні  значення
/*for (let i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] % 2 === 0) {
        console.log(numberArray[i]);
    }
}*/

// 7) замінити кожне число кратне 3 на слово "okten"
/*for (let i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] % 3 === 0) {
        numberArray[i] = 'okten'
    }
    console.log(numberArray[i])
}*/
