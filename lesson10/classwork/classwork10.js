// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
/*const btnId = document.getElementById('btn-id');
const firstInputField = document.forms.form1.firstInput;
const secondInputField = document.forms.form1.secondInput;
const thirdInputField = document.forms.form2.firstInput;
const fourthInputField = document.forms.form2.secondInput;

btnId.onclick = () => {
    console.log(`First field: ${firstInputField.value}`)
    console.log(`Second field: ${secondInputField.value}`);
    console.log(`Third field: ${thirdInputField.value}`);
    console.log(`Fourth field: ${fourthInputField.value}`)
}*/


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// Rows - tr; cells - td;
/*const inputField1 = document.forms.form1.inputOne;
const inputField2 = document.forms.form1.inputTwo;
const inputField3 = document.forms.form1.inputThree;

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const table = document.createElement('table');
    for (let i = 0; i < +inputField1.value; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < +inputField2.value; j++) {
            const cells = document.createElement('td');
            cells.innerText = inputField3.value;
            row.appendChild(cells);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
})*/

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
/*const uncensoredArray = ['callback', 'recursion', 'callback and recursion', 'regExp', 'destructuring', 'nested loop', 'proxy'];
const form = document.createElement('form');
const textInput = document.createElement('input');
textInput.setAttribute('type', 'text');
const formBtn = document.createElement('input');
formBtn.setAttribute('type', 'submit');


formBtn.onclick = (e) => {
    e.preventDefault();
    if (uncensoredArray.includes(textInput.value)) {
        alert('Ата-та');
    } else {
        alert('Не є нецензурним словом');
    }

    // OR

    // Виведе введене слово якщо воно є в масиві
    // const swearWord = uncensoredArray.filter(word => word === textInput.value)
    // alert(swearWord.toString());
}

form.appendChild(textInput);
form.appendChild(formBtn);
document.body.appendChild(form);*/

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
/*const uncensoredArray = ['callback', 'recursion', 'callback and recursion', 'regExp', 'destructuring', 'nested loop', 'proxy'];
const form = document.createElement('form');
const textInput = document.createElement('input');
textInput.setAttribute('type', 'text');
const btn = document.createElement('input');
btn.setAttribute('type', 'submit');
btn.innerText = 'Click';
btn.addEventListener('click', e => {
    e.preventDefault();
    // for (let i = 0; i < uncensoredArray.length; i++) {
    //     if (textInput.value.includes(uncensoredArray[i])) {
    //         alert()
    //     }
    // }

    // OR

    const swearWordsFilter = uncensoredArray.filter(word => textInput.value.includes(word));
    alert('Your input contains swear word');
})

form.appendChild(textInput);
form.appendChild(btn);
document.body.appendChild(form);*/
