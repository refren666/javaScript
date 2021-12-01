// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
/*const newDiv = document.createElement("div");
newDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
newDiv.style.background = '#666';
newDiv.style.color = '#fff';
newDiv.style.fontSize = '1.5rem';
newDiv.innerText = 'Wood chuck chuck';
document.body.appendChild(newDiv);
const cloneDiv = newDiv.cloneNode(true);
document.body.appendChild(cloneDiv);*/

// for more same elements :
// document.body.appendChild(newDiv.cloneNode(true));
// document.body.appendChild(newDiv.cloneNode(true));
// document.body.appendChild(newDiv.cloneNode(true));
// document.body.appendChild(newDiv.cloneNode(true));

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
/*const array = ['Main','Products','About us','Contacts'];
const menu = document.getElementsByClassName('menu')[0];
for (let i = 0; i < array.length; i++) {
    const newLi = document.createElement('li')
    newLi.innerText = `I'm element li with number ${i + 1}`
    menu.appendChild(newLi);
}*/

// - Є масив
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
/*for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.innerText = `Course: ${coursesAndDurationArray[i].title}; duration: ${coursesAndDurationArray[i].monthDuration} months`;
    document.body.appendChild(newDiv);
}*/

// - Є масив
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

/*for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('item');
    const newH1 = document.createElement('h1');
    newH1.classList.add('heading');
    newH1.innerText = `Course: ${coursesAndDurationArray[i].title}`;
    const newP = document.createElement('p');
    newP.classList.add('description');
    newP.innerText = `Duration ${coursesAndDurationArray[i].monthDuration} months`
    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);
    document.body.appendChild(newDiv);
}*/
