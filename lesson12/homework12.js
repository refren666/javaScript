// 1.
// Отримати з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postsArray => {
        const postsWrapper = document.createElement('div');
        postsWrapper.classList.add('post-wrapper')
        postsArray.forEach(post => {
            const postBlock = document.createElement('div');
            postBlock.classList.add('post');
            postBlock.innerHTML = `<p>User id: ${post.userId}</p>
                                   <p>Post id: ${post.id}</p>
                                   <h3>Title: ${post.title}</h3>
                                   <p><i>Post body: ${post.body}</i></p>`

            postsWrapper.appendChild(postBlock);
        })
        document.body.appendChild(postsWrapper);
    })*/


// 2.
// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

/*fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(commentsArray => {
        const commentsWrapper = document.createElement('div');
        commentsWrapper.classList.add('comments-wrapper');
        commentsArray.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.classList.add('comment');
            commentBlock.innerHTML = `<p>Post: ${comment.postId}</p>
                                      <p>User id: ${comment.id}</p>
                                      <h3>Title: ${comment.name}</h3>
                                      <p>Email: <a href="#"><i>${comment.email}</i></a></p>
                                      <p>Comment: <i>${comment.body}</i></p>`
            commentsWrapper.appendChild(commentBlock);
        })
        document.body.appendChild(commentsWrapper);
    })*/
