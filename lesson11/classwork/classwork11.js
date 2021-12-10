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
for (let user of users) {
    const userBlockContainer = document.createElement('div');
    const userBlock = document.createElement('span');
    userBlock.innerText = `Name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    userBlock.style.border = '2px solid black';
    userBlock.style.marginRight = '5px';
    userBlock.style.padding = '2px';
    const addToFavoritesBtn = document.createElement('button');
    addToFavoritesBtn.innerText = 'Add to favorites';
    addToFavoritesBtn.style.marginBottom = '5px';
    addToFavoritesBtn.style.padding = '4px';
    userBlockContainer.append(userBlock, addToFavoritesBtn);
    document.body.appendChild(userBlockContainer);

    const favoriteUsers = 'favoriteUsers';

    addToFavoritesBtn.onclick = () => {
        const favoriteUsersArray = JSON.parse(localStorage.getItem(favoriteUsers)) ?? [];
        const findDuplicate = favoriteUsersArray.find(el => el.name === user.name && el.age === user.age && el.status === user.status);
        if (favoriteUsersArray.includes(findDuplicate)) {
            return;
        } else {
            favoriteUsersArray.push(user);
        }
        localStorage.setItem(favoriteUsers, JSON.stringify(favoriteUsersArray));
    }
}

// localStorage.clear()

const toFavorites = document.createElement('a');
toFavorites.href = 'favorites.html';
toFavorites.innerText = 'To favorites';
document.body.appendChild(toFavorites);
