// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"
const paragraphText = document.getElementById('content');
console.log(paragraphText.innerText);

//     -- отримує текст з блоку з id "rules"
const blockText = document.getElementById('rules');
console.log(blockText.innerText);

//     -- замініть текст параграфа з id 'content' на будь-який інший
paragraphText.innerText =
    'What will we do with a drunken sailor?\n' +
    'What will we do with a drunken sailor?\n' +
    'What will we do with a drunken sailor?\n' +
    'Early in the morning!';
console.log(paragraphText.innerText);

//     -- замініть текст параграфа з id 'rules' на будь-який інший
blockText.innerText =
    'Way hay and up she rises\n' +
    'Way hay and up she rises\n' +
    'Way hay and up she rises\n' +
    'Early in the morning!';

console.log(blockText.innerText);

//     -- змініть кожному елементу колір фону на червоний
const bodyElements = document.body.children;
for (let elem of bodyElements) {
    elem.style.backgroundColor = 'crimson';
}

//     -- змініть кожному елементу колір тексту на синій
for (let elem of bodyElements) {
    elem.style.color = 'lightblue';
}

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(blockText.classList);

//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
const fcRules = document.getElementsByClassName('fc_rules');
for (let elem of fcRules) {
    elem.style.color = 'rgb(102, 0, 14)';
}