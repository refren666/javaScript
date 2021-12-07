// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
/*const divBlock = document.createElement('div');
divBlock.setAttribute('id', 'text');
divBlock.style.width = '200px';
divBlock.style.height = '200px';
divBlock.style.background = 'crimson';

const buttonElement = document.createElement('button');
buttonElement.innerText = 'Click';

document.body.append(divBlock, buttonElement);

const divBlockId = document.getElementById('text');

buttonElement.onclick = () => divBlockId.style.display = 'none';*/

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
/*const btn = document.createElement('button');
btn.innerText = "Kill me please"
document.body.appendChild(btn);

btn.onclick = () => btn.style.display = 'none';*/

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

/*const submitBtnId = document.getElementById('submitBtn');
const ageValueId = document.getElementById('ageValue');

submitBtnId.onclick = (e) => {
    e.preventDefault();
    console.log(+ageValueId.value)
    if (+ageValueId.value >= 18) {
        alert('You have passed the age verification, enjoy!');
    } else {
        alert('You have failed the age verification, website content is unavailable for you.')
    }
}*/

// - Создайте меню, которое раскрывается/сворачивается при клике
/*const carsDropdown = document.getElementById("carsDropdown");
const carsArrow = document.getElementById("carsArrow");
const carsToggle = document.getElementById("carsToggle");

carsToggle.onclick = () => {
    if (carsDropdown.style.display === "none") {
        carsDropdown.style.display = "block";
        carsArrow.style.transform = "rotate(180deg)";
    } else {
        carsDropdown.style.display = "none";
        carsArrow.style.transform = "rotate(0deg)";
    }
}*/

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

/*const commentsArray = [
    {from: 'Vito Corleone', body: 'I\'m gonna make him an offer he can\'t refuse'},
    {from: 'Han Solo', body: 'May the Force be with you'},
    {from: 'Lt. Col. Bill Kilgore', body: 'I love the smell of napalm in the morning.'},
    {from: 'James Bond', body: 'Bond. James Bond.'},
    {from: 'Henry Frankenstein', body: 'It\'s alive! It\'s alive!'},
    {from: 'Jim Lovell', body: 'Houston, we have a problem.'},
    {from: 'Michael Corleone', body: 'Keep your friends close, but your enemies closer.'},
    {from: 'Tony Montana', body: 'Say \'hello\' to my little friend!'},
    {from: 'Sherlock Holmes', body: 'Elementary, my dear Watson.'},
    {from: 'Jack Torrance', body: 'Here\'s Johnny!'}
];

const wrapperBlock = document.createElement('div');
wrapperBlock.setAttribute('id', 'wrapper-id');
wrapperBlock.style.border = '1px solid black';
wrapperBlock.style.padding = '20px';
let idCounter = 0;
for (let comment of commentsArray) {
    const commentBlock = document.createElement('div');
    commentBlock.style.display = 'flex';
    commentBlock.style.columnGap = '20px';
    commentBlock.style.border = '1px solid black';
    commentBlock.style.marginBottom = '5px';
    commentBlock.style.padding = '5px';
    const commentTitle = document.createElement('div');
    commentTitle.innerText = comment.from;
    const commentBody = document.createElement('div');
    commentBody.innerText = comment.body;
    const commentButton = document.createElement('button');
    commentButton.innerText = 'Hide/Show comment';
    commentButton.onclick = () => {
        if (commentButton.previousElementSibling.style.display === 'none') {
            commentButton.previousElementSibling.style.display = 'block';
        } else {
            commentButton.previousElementSibling.style.display = 'none';
        }
    };

    wrapperBlock.appendChild(commentBlock);
    commentBlock.appendChild(commentTitle);
    commentBlock.appendChild(commentBody);
    commentBlock.appendChild(commentButton);
    idCounter++;
}

document.body.appendChild(wrapperBlock);*/
