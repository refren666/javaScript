// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.

const favoriteUsers = [];
for (let user of users) {
    const userBlockContainer = document.createElement('div')
    const userBlock = document.createElement('span');
    userBlock.innerText = `Name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    userBlock.style.border = '2px solid black';
    userBlock.style.marginRight = '5px';
    userBlock.style.padding = '2px';
    const addToFavouritesBtn = document.createElement('button');
    addToFavouritesBtn.innerText = 'Add to favorites';
    addToFavouritesBtn.style.marginBottom = '5px';
    addToFavouritesBtn.style.padding = '4px';
    userBlockContainer.append(userBlock, addToFavouritesBtn);
    document.body.appendChild(userBlockContainer);

    addToFavouritesBtn.onclick = () => {
        favoriteUsers.push(user)
        localStorage.setItem('favourites' , JSON.stringify(favoriteUsers));
    }
}

// localStorage.clear()
