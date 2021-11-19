// - Дано натуральное число n. Выведите все числа от 1 до n.
/*const counter = n => {
    for (let i = 0; i < n; i++) {
        console.log(i + 1);
    }
};

counter(10);*/

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
/*const xxx = (A, B) => {
        if (A < B) {
            for (let i = A; i <= B; i++) {
                console.log(i);
            }
        } else if (A > B) {
            for (let j = A; j >= B ; j--) {
                console.log(j);
            }
        }
}
xxx(10, 20);*/

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

/*let foo = [9,8,0,4];

const xxx = (arr, i) => {
    if (i < 0 || i > 2) {
       alert('Try number from 0 to 2');
    }

    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    return arr;
}

console.log(xxx(foo, 0));*/

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

/*
let array = [1,0,6,0,3];
let array2 = [0,1,2,3,4];
let array3 = [0,0,1,0];

const kamasutra = arr => {
    // Пробігаюся по масиву і шукаю скільки раз зустрічається цифра 0
    let amountOfZero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            amountOfZero++;
        }
    }
    // Виходячи з того скільки є елементів '0', знаходжу індекс цих елементів і виношу на кінець масиву
    for (let i = 0; i < amountOfZero; i++) {
        arr.push(arr.splice(arr.indexOf(0), 1)[0]);
    }
    return arr;
}

console.log(kamasutra(array));
console.log(kamasutra(array2));
console.log(kamasutra(array3));*/
