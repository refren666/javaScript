// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
const favoriteUsers = localStorage.getItem('favourites');
const favoriteUsersArray = JSON.parse(favoriteUsers);
console.log(favoriteUsersArray);

for (const favouriteUser of favoriteUsersArray) {
    const usersBlock = document.createElement('div');
    usersBlock.innerText = `Name: ${favouriteUser.name}, age: ${favouriteUser.age}, status: ${favouriteUser.status}`;
    document.body.appendChild(usersBlock);
}