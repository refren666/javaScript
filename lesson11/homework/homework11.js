// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
/*const form = document.createElement('form');
const nameInput = document.createElement('input');
nameInput.setAttribute('placeholder', 'Your name');
const ageInput = document.createElement('input');
ageInput.setAttribute('type', 'number');
ageInput.setAttribute('placeholder', 'Your age');
const btn = document.createElement('button');
btn.innerText = 'Send';
btn.onclick = (e) => {
    e.preventDefault();
    localStorage.setItem('user info', JSON.stringify({name: nameInput.value, age: ageInput.value}));
}
form.append(nameInput, ageInput, btn);
document.body.appendChild(form);*/

// TEST
// const myInfo = localStorage.getItem('user info');
// const obj = JSON.parse(myInfo)
// console.log(obj);


// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
/*const form = document.createElement('form');
const modelInput = document.createElement('input');
modelInput.setAttribute('placeholder', 'Car model');
const typeInput = document.createElement('input');
typeInput.setAttribute('placeholder', 'Car type');
const volumeInput = document.createElement('input');
volumeInput.setAttribute('type', 'number');
volumeInput.setAttribute('placeholder', 'Car volume');
const btn = document.createElement('button');
btn.innerText = 'Send';

btn.onclick = (e) => {
    e.preventDefault();
    localStorage.setItem('car info', JSON.stringify([modelInput.value, typeInput.value, +volumeInput.value]));
}

form.append(modelInput, typeInput, volumeInput, btn);
document.body.appendChild(form);*/

// TEST
// const myInfo = localStorage.getItem('car info');
// const arr = JSON.parse(myInfo)
// console.log(arr);