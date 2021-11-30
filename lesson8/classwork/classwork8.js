// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
const mainHeader = document.getElementById('main_header');
mainHeader.classList.add('september-2021');

//     b) робить шириниу елементу ul 400px
const ulEl = document.getElementsByTagName('ul')[0];
ulEl.style.width = '400px';

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
const linkListElements = document.getElementsByClassName('linkList');
// console.log(linkListElements)
for (let elem of linkListElements) {
    elem.style.width = '50%';
}

//     d) отримує текст який зберігається в елементі з класом listElement2
// const listElement2 = document.querySelector('.listElement2 > a');
// OR
const listElement2 = document.getElementsByClassName('listElement2')[0];
console.log(listElement2.innerText);

//     e) отримує всі елементи li та змінює ім колір фону на сірий
const allLiElements = ulEl.children;
// console.log(allLiElements);
for (let li of allLiElements) {
    li.style.backgroundColor = '#666';
}

//     f) отримує всі елементи 'a' та додає їм клас anchor
const allElementsWithTagA = document.getElementsByTagName('a');
for (let aElem of allElementsWithTagA) {
    aElem.classList.add('anchor');
}

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let aElem of allElementsWithTagA) {
    if (aElem.innerText.includes('link3')) {
        aElem.style.fontSize = '40px';
    }
}

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let aElem of allElementsWithTagA) {
    aElem.classList.add(`element_${aElem.innerText}`)
}

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*const subHeader = document.getElementsByClassName('sub-header');
const bgColor = prompt('Enter your color', 'cornflowerblue');
for (let elem of subHeader) {
    elem.style.backgroundColor = bgColor;
}*/
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
/*const subHeader = document.getElementsByClassName('sub-header');
const textColor = prompt('Enter which color you want to apply for text: ', '#666');
for (let elem of subHeader) {
    if (elem.innerText.includes('content 2 segment')) {
        elem.style.color = textColor;
    }
}*/

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
/*const content1 = document.getElementsByClassName('content_1')[0];
const myText = prompt('Enter text here');

content1.innerText = myText;*/

//     l) отримати елементи p та змінити їм padding на 20px
const allElementsWithTagP = document.getElementsByTagName('p');
for (let elem of allElementsWithTagP) {
    elem.style.padding = '20px';
}

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const text2 = document.getElementsByClassName('text2')[0];
text2.innerText = 'sep-2021';