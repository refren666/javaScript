// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// ****************************************************

// I USED THIS EMPTY ARRAY FOR EVERY EXERCISE IN TASK 1
// let array = [];

//*****************************************************

// a. заповнити його 50 парними числами за допомоги циклу.
/*let number = 0;
for (let i = 0; i < 50; i++) {
    array[i] = number += 2;
}
console.log(array)*/

// b. заповнити його 50 непарними числами за допомоги циклу.
/*let number = -1;
for (let i = 0; i < 50; i++) {
    array[i] = number += 2;
}
console.log(array)*/

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
/*for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 101)
}
console.log(array)*/

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
/*for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 724) + 8
}
console.log(array)*/

// ********************************************************************************************

// 2. Вивести за допомогою console.log кожен третій елемент
/*let array2 = []
let number = 0;
for (let i = 0; i < 20; i++) {
    array2[i] = number += 1;
}
console.log(array2)

for (let i = 2; i < array2.length; i += 3) {
    console.log(array2[i])
}*/

// ********************************************************************************************

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
/*let array3 = []
let number = 0;
for (let i = 0; i < 50; i++) {
    array3[i] = number += 1;
}
console.log(array3)

for (let i = 2; i < array3.length; i += 3) {
    if (array3[i] % 2 === 0) {
        console.log(array3[i])
    }
}*/

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

