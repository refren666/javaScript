// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
/*let emptyArray = [];
for (let user of users) {
    emptyArray.push(user.address);
}
console.log(emptyArray);*/
// OR

/*for (let user of users) {
    for (let item in user.address) {
        emptyArray.push(`${item} - ${user.address[item]}`);
    }
}
console.log(emptyArray);*/
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
/*for (let user of users) {
    const userBlock = document.createElement('div');
    userBlock.innerText = `Name: ${user.name}, age: ${user.age}, status: ${user.status}, 
    address: ${user.address.city}, ${user.address.country}, street: ${user.address.street}, house #${user.address.houseNumber}`;

    document.body.appendChild(userBlock);
}*/

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
/*for (let user of users) {
    const mainBlock = document.createElement('div');

    const nameBlock = document.createElement('div');
    nameBlock.innerText = `Name: ${user.name}`;
    const ageBlock = document.createElement('div');
    ageBlock.innerText = `age: ${user.age}`;
    const statusBlock = document.createElement('div');
    statusBlock.innerText = `status: ${user.status}`;
    const addressBlock = document.createElement('div');
    addressBlock.innerText = `Address: ${user.address.city}, ${user.address.country}, street: ${user.address.street}, house #${user.address.houseNumber}`;

    mainBlock.appendChild(nameBlock);
    mainBlock.appendChild(ageBlock);
    mainBlock.appendChild(statusBlock);
    mainBlock.appendChild(addressBlock);
    document.body.appendChild(mainBlock);
}*/

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості.
/*for (let user of users) {
    const mainBlock = document.createElement('div');

    const nameBlock = document.createElement('div');
    nameBlock.innerText = `Name: ${user.name}`;
    const ageBlock = document.createElement('div');
    ageBlock.innerText = `age: ${user.age}`;
    const statusBlock = document.createElement('div');
    statusBlock.innerText = `status: ${user.status}`;

    const addressBlock = document.createElement('ul');

    const cityBlock = document.createElement('li');
    cityBlock.innerText = `City: ${user.address.city}`;
    const countryBlock = document.createElement('li');
    countryBlock.innerText = `Country: ${user.address.country}`;
    const streetBlock = document.createElement('li');
    streetBlock.innerText = `Street: ${user.address.street}`;
    const houseNumberBlock = document.createElement('li');
    houseNumberBlock.innerText = `House #${user.address.houseNumber}`;

    mainBlock.appendChild(nameBlock);
    mainBlock.appendChild(ageBlock);
    mainBlock.appendChild(statusBlock);
    mainBlock.appendChild(addressBlock);
    mainBlock.appendChild(addressBlock);
    addressBlock.appendChild(cityBlock);
    addressBlock.appendChild(countryBlock);
    addressBlock.appendChild(streetBlock);
    addressBlock.appendChild(houseNumberBlock);
    document.body.appendChild(mainBlock);
}*/

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

/*let blockWithIdClass = document.getElementById('content');
console.log(blockWithIdClass)
let h2Tags = document.getElementsByTagName('h2');
let h2List = document.createElement('ul');
for (let i = 0; i < h2Tags.length; i++) {
    let h2ListElement = document.createElement('li');
    h2ListElement.innerText = h2Tags[i].innerText;
    h2List.appendChild(h2ListElement);
}
blockWithIdClass.appendChild(h2List);*/

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
/*
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

const wrapper = document.createElement('div')
for (const rule of rules) {
    const ruleBlock = document.createElement('div');

    const ruleNumber = document.createElement('h2');
    ruleNumber.innerText = rule.title;
    const ruleDescriptionBlock = document.createElement('p');
    ruleDescriptionBlock.innerText = rule.body;
    ruleBlock.appendChild(ruleNumber);
    ruleBlock.appendChild(ruleDescriptionBlock);
    wrapper.appendChild(ruleBlock);
}
document.body.appendChild(wrapper);*/
