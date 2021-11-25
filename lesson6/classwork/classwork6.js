// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'

// Method 1:
/*const normalizer = (name, symbol) => {
    if (name.includes(symbol)) {
        name = name.replaceAll(symbol, ' ').replace(/\s+/g, ' ');
        return name;
    }
}

console.log(normalizer(n1, '.'));
console.log(normalizer(n2, '-'));
console.log(normalizer(n3, '_'));*/

// Method 2:
/*const normalizer2 = (name, symbol) => {
     const arr = name.split(symbol);
     const uniq = [...new Set(arr)];
     uniq.splice(1, 1);
     return uniq.join(' ');
}

console.log(normalizer2(n1, '.'));
console.log(normalizer2(n2, '-'));
console.log(normalizer2(n3, '_'));*/

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// ВИКОРИСТОВУВАВ ЦЕЙ ПУСТИЙ МАСИВ І ЦЮ ФУНКЦІЮ ДЛЯ НАСТУПНИХ ЗАДАЧ !

/*const array = [];
const foo = arr => {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 101));
    }
    return arr;
}*/

// console.log(foo(array));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

/*let sortedArray = foo(array).sort((a, b) => a - b);
console.log(sortedArray);*/

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
/*let filteredArray = foo(array).filter( number => {
    if (number % 2 === 0) {
        return number;
    }
});

console.log(filteredArray);*/

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// Method 1:
/*let arrayToString = foo(array).map(String);
console.log(arrayToString);*/

// Method 2:
/*let arrayToString = foo(array).map(number => {
    return number + '';
})
console.log(arrayToString)*/

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

/*let nums = [11,21,3, 5, 2, 10, 42];
const sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a)
    }
    return arr;
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));*/

// - є масив
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
//  -- відсортувати його за спаданням за monthDuration
/*const letMeSortThisArray = arr => {
    arr.sort((a, b) => b.monthDuration - a.monthDuration);
    return arr;
}

console.log(letMeSortThisArray(coursesAndDurationArray));*/

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
/*const letMeFilterThisArray = arr => {
    return arr.filter(course => {
        if (course.monthDuration > 5) {
            return course;
        }
    });
}

console.log(letMeFilterThisArray(coursesAndDurationArray));*/

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

/*const cutString = (str, n) => {
    const parts = [];
    while (true) {
        if (str.length < n) {
            parts.push(str);
            break;
        } else {
            parts.push(str.substr(0, n));
            str = str.substr(n);
        }
    }
    return parts;
}

console.log(cutString('наслаждение', 3));*/


