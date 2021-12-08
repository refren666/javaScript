// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
/*document.addEventListener('click', (e) => {
    if (e.target.localName !== 'html' && e.target.localName !== 'body') {
        console.log(e.target);
        console.log(`Element tag: ${e.target.localName}`);
        console.log(`Element classes: ${e.target.className ? e.target.className : '-'}`);
        console.log(`Element id: ${e.target.id ? e.target.id : '-'}`);
        console.log(`Element size: ${e.target.clientHeight}*${e.target.clientWidth}`);
    }
})*/

// ------------------------------------------------------------------------------------------------------

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

/*const closeBtn = document.getElementsByClassName('close-button')[0];
const overlay = document.getElementsByClassName('overlay')[0];
const modal = document.getElementsByClassName('modal')[0];
const modalBody = document.getElementsByClassName('modal__body')[0];

document.addEventListener('click', (e) => {
    if (e.target.localName !== 'html' && e.target.localName !== 'body') {
        modal.classList.toggle('active');
        overlay.classList.toggle('active');
        modalBody.innerHTML = `<p>Element tag: ${e.target.localName}</p>
                                <p>Element classes: ${e.target.className ? e.target.className : '-'}</p>
                                <p>Element id: ${e.target.id ? e.target.id : '-'}</p>
                                <p>Element size: ${e.target.clientHeight}*${e.target.clientWidth}</p>`
    }
})*/

// ------------------------------------------------------------------------------------------------------

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

/*const checkboxForm = document.forms.checkboxForm;
const userFilteredBlock = (filteredUsers,blockToAppend) => {
    for (const user of filteredUsers) {
        const userDetailsBlock = document.createElement('div');
        userDetailsBlock.style.border = '1px solid black';
        userDetailsBlock.innerText = `Id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}; 
            address: city: ${user.address.city},  street: ${user.address.street}, number: ${user.address.number}`;
        blockToAppend.appendChild(userDetailsBlock);
    }
}

checkboxForm.addEventListener('submit', e => {
    e.preventDefault();
    const filteredUser = document.createElement('div');
    filteredUser.style.border = '1px solid black';
    filteredUser.style.marginBottom = '5px';
    if (this.checkbox1.checked && this.checkbox2.checked && this.checkbox3.checked) {
        const userWithThreeCheckboxes = usersWithAddress.filter(user => !user.status && user.age > 29 && user.address.city === 'Kyiv');
        userFilteredBlock(userWithThreeCheckboxes, filteredUser);
    } else if (this.checkbox1.checked && this.checkbox2.checked) {
        const userWithFirstAndSecondCheckbox = usersWithAddress.filter(user => !user.status && user.age > 29);
        userFilteredBlock(userWithFirstAndSecondCheckbox, filteredUser);
    } else if (this.checkbox1.checked && this.checkbox3.checked) {
        const userWithFirstAndThirdCheckbox = usersWithAddress.filter(user => !user.status && user.address.city === 'Kyiv');
        userFilteredBlock(userWithFirstAndThirdCheckbox, filteredUser);
    } else if (this.checkbox2.checked && this.checkbox3.checked) {
        const userWithSecondAndThirdCheckbox = usersWithAddress.filter(user => user.age > 29 && user.address.city === 'Kyiv');
        userFilteredBlock(userWithSecondAndThirdCheckbox, filteredUser);
    } else if (this.checkbox1.checked) {
        const usersWithStatusFalse = usersWithAddress.filter(user => !user.status);
        userFilteredBlock(usersWithStatusFalse, filteredUser);
    } else if (this.checkbox2.checked) {
        const usersWithAgeOver29 = usersWithAddress.filter(user => user.age > 29);
        userFilteredBlock(usersWithAgeOver29, filteredUser);
    } else if (this.checkbox3.checked) {
        const usersFromKyiv = usersWithAddress.filter(user => user.address.city === 'Kyiv');
        userFilteredBlock(usersFromKyiv, filteredUser);
    } else {
        userFilteredBlock(usersWithAddress, filteredUser);
    }
    document.body.appendChild(filteredUser);
})*/

// ------------------------------------------------------------------------------------------------------

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
const elem = document.getElementsByClassName('main-block')[0];
const leftBtn = document.createElement('img');
leftBtn.src = 'icons/arrow_left.svg';
leftBtn.style.width = '15px';
const rightBtn = document.createElement('img');
rightBtn.src = 'icons/arrow_right.svg';
rightBtn.style.width = '15px';
rightBtn.style.cursor = 'pointer';
function recursion(domElement) {
    console.log(domElement);
    let counter = 1;
    rightBtn.onclick = function() {
        if (domElement.children.length) {
            for (let i = 0; i < counter; i++) {
                let children = domElement.children[i];
                recursion(children)
            }
        }
    }
        // знайти першого нащадка цього елементу і вивести його, якщо немає дітей то вивести наступного нащадка

        // якщо в нащадка є діти, виводити кожну дитину окремо

    document.body.append(leftBtn, rightBtn);
}

recursion(elem);

// testing
// console.log(elem.children)

// template:
/*const elem = document.getElementsByClassName('main-block')[0];
function reCall(startElement) {
    console.log(startElement);
    if (startElement.children.length) {
        for (const children of startElement.children) {
            reCall(children);
        }
    }
}

reCall(elem)*/

// ------------------------------------------------------------------------------------------------------

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
/*const track = document.getElementsByClassName('carousel__track')[0];
const slides = Array.from(track.children);
const nextBtn = document.getElementsByClassName('carousel__button_right')[0];
const prevBtn = document.getElementsByClassName('carousel__button_left')[0];
const dotsNav = document.getElementsByClassName('carousel__nav')[0];
const dots = Array.from(dotsNav.children);

// This will measure the size of the first slide and its coordinates; then gets its width (.width)
const slideWidth = slides[0].getBoundingClientRect().width;

// Setting slides position next to each other (works only with 3 slides)
// slides[0].style.left = '0';
// slides[1].style.left = slideWidth + 'px'; // moves one slide to the right
// slides[2].style.left = slideWidth * 2 +'px'; // moves two slides to the right

// Same, but works with any amount of slides
slides.forEach((slide,index) => slide.style.left = slideWidth * index + 'px');

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.toggle('current-slide');
    targetSlide.classList.toggle('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.toggle('current-slide');
    targetDot.classList.toggle('current-slide');
}

const arrowHandler = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }
}

// Left arrow logic:
prevBtn.addEventListener('click', e => {
    const currentSlide = track.getElementsByClassName('current-slide')[0];
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.getElementsByClassName('current-slide')[0];
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    arrowHandler(slides, prevBtn, nextBtn, prevIndex);
})

// Right arrow logic:
nextBtn.addEventListener('click', e => {
    const currentSlide = track.getElementsByClassName('current-slide')[0];
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.getElementsByClassName('current-slide')[0];
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    arrowHandler(slides, prevBtn, nextBtn, nextIndex);
})

// Bottom indicators logic:
dotsNav.addEventListener('click', e => {
    // Метод Element.closest() повертає найближчий батьківський елемент (або сам елемент), який відповідає заданому
    // CSS-селектору або null, якщо таких елементів взагалі немає.
    const targetDot = e.target.closest('button');

    // if i pressed somewhere in button's area (but not on the buttons) do nothing
    if (!targetDot) return;

    const currentSlide = track.getElementsByClassName('current-slide')[0];
    const currentDot = dotsNav.getElementsByClassName('current-slide')[0];

    // Returns the index of pressed button
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    arrowHandler(slides, prevBtn, nextBtn, targetIndex);
})*/

// ------------------------------------------------------------------------------------------------------

//  Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//  *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

/*const textblock = document.getElementById('textBlock');
document.addEventListener('mouseup', () => {
    const selectedText = document.getSelection().toString();
    textblock.innerHTML = selectedText.replace(selectedText, selectedText.bold());
})*/
