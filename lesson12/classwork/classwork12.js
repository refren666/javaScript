// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
const wrapper = document.createElement('div');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postsArray => {
        for (const post of postsArray) {
            const postInfo = document.createElement('div');
            postInfo.style.border = '1px solid black';
            postInfo.style.marginBottom = '10px';
            postInfo.style.padding = '10px';
            postInfo.innerHTML = `<p>User: ${post.userId}</p>
                                  <p>Post id: ${post.id}</p>
                                  <h3>Title: ${post.title}</h3>
                                  <p><i>Post body: ${post.body}</i></p>`
            const postCommentsBtn = document.createElement('button');
            postCommentsBtn.innerText = 'Open comments';
            postCommentsBtn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(commentsArray => {
                            for (const comment of commentsArray) {
                                if (comment.postId === post.id) {
                                    const commentBlock = document.createElement('div');
                                    commentBlock.style.borderTop = '1px dashed black';
                                    commentBlock.style.marginTop = '5px';
                                    commentBlock.innerHTML = `<p>Post: ${comment.postId}</p>
                                                              <p>User id: ${comment.id}</p>
                                                              <h3>Title: ${comment.name}</h3>
                                                              <p>Email: <a href="#"><i>${comment.email}</i></a></p>
                                                              <p>Comment: <i>${comment.body}</i></p>`
                                    postInfo.appendChild(commentBlock)
                                }
                            }
                        }
                    )}
            postInfo.appendChild(postCommentsBtn);
            wrapper.appendChild(postInfo);
        }
    })
document.body.appendChild(wrapper);

// const postCommentsBtn = document.getElementById('postComments');
// postCommentsBtn.onclick = () => {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(response => response.json())
//         .then(commentsArray => {
//             for (const comment of commentsArray) {
//                 if (comment.postId === ) {
//
//                 }
//             }
//         })
// }