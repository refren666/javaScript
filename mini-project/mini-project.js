// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {
        usersArray.forEach(user => {
            const usersWrapper = document.createElement('div');
            usersWrapper.style.display = 'grid';
            usersWrapper.style.gridTemplateColumns = 'repeat(2, 1fr)';

            const userBlock = document.createElement('div');
            userBlock.style.border = '1px solid crimson';
            userBlock.style.marginBottom = '10px';
            userBlock.style.padding = '5px';
            userBlock.innerHTML = `<h2>ID: ${user.id}</h2>
                                   <h3>Name: ${user.name}</h3>`
            const detailsLink = document.createElement('a');
            detailsLink.style.textDecoration = 'none';
            detailsLink.style.color = 'blue';
            detailsLink.href = 'user-details.html';
            detailsLink.innerText = 'Click for user info';
            detailsLink.setAttribute('target', '_blank');

            detailsLink.addEventListener('click', () => {
                localStorage.setItem('targetUser', JSON.stringify(user))
            })

            userBlock.appendChild(detailsLink);
            usersWrapper.appendChild(userBlock);
            document.body.appendChild(usersWrapper);
        })
    })

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их
// блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)