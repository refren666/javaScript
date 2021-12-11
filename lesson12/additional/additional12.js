// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

const wrapper = document.createElement('div');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {
        for (const user of usersArray) {
            const userBlock = document.createElement('div');
            userBlock.style.border = '1px solid black';
            userBlock.style.marginBottom = '10px';
            userBlock.style.padding = '5px';
            userBlock.style.backgroundColor = '#fff';

            userBlock.innerHTML = `<p>User ID: <b>${user.id}</b></p>
                                   <p>Name: <i>${user.name}</i></p>
                                   <p>Username: <i>${user.username}</i></p>
                                   <p>Email: <i>${user.email}</i></p>`

            const userPostsBtn = document.createElement('button');
            userPostsBtn.innerText = 'Open posts';

            userPostsBtn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(postsArray => {
                        for (const post of postsArray) {
                            if (post.userId === user.id) {
                                const postBlock = document.createElement('div');
                                postBlock.style.border = '1px solid cornflowerblue';
                                postBlock.style.margin = '5px';
                                postBlock.style.padding = '5px';

                                postBlock.innerHTML = `<p>User: <i>${user.name}</i></p>
                                                       <p>Post id: ${post.id}</p>
                                                       <h3>Post title: ${post.title}</h3>
                                                       <p><i>Post body: ${post.body}</i></p>`

                                userPostsBtn.style.display = 'none';

                                const commentsBtn = document.createElement('button');
                                commentsBtn.innerText = 'Open post comments';

                                commentsBtn.onclick = () => {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(response => response.json())
                                        .then(commentsArray => {
                                            for (const comment of commentsArray) {
                                                if (comment.postId === post.id) {
                                                    const commentBlock = document.createElement('div');
                                                    commentBlock.style.border = '1px solid crimson';
                                                    commentBlock.style.margin = '5px';

                                                    commentBlock.innerHTML = `<p>Post: ${comment.postId}</p>
                                                                              <p>User: <i>${user.name}</i></p>
                                                                              <h3>Title: ${comment.name}</h3>
                                                                              <p>Email: <a href="#"><i>${comment.email}</i></a></p>
                                                                              <p>Comment: <i>${comment.body}</i></p>`

                                                    commentsBtn.style.display = 'none';

                                                    postBlock.appendChild(commentBlock);
                                                }
                                            }
                                        })
                                }

                                postBlock.appendChild(commentsBtn);
                                userBlock.appendChild(postBlock);
                            }
                        }
                    })
            }
            userBlock.appendChild(userPostsBtn);
            wrapper.appendChild(userBlock);
        }
    })
document.body.appendChild(wrapper);