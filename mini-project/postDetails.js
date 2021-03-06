const targetPost = JSON.parse(localStorage.getItem('targetPost'));
const postBlock = document.createElement('div');
postBlock.innerHTML = `
                    <h3>UserId: ${targetPost.userId}</h3>
                    <h3>PostId: ${targetPost.id}</h3>
                    <h2>Title: ${targetPost.title}</h2>
                    <p>Body: ${targetPost.body}</p>`

const titleBlock = document.createElement('h2');
titleBlock.innerText = 'Comments related to this post: ';
document.body.append(postBlock,titleBlock);

const commentsWrapper = document.createElement('div');
commentsWrapper.style.display = 'grid';
commentsWrapper.style.gap = '5px';
commentsWrapper.style.gridTemplateColumns = 'repeat(4, 1fr)';
fetch(`https://jsonplaceholder.typicode.com/posts/${targetPost.id}/comments`)
    .then(response => response.json())
    .then(commentsArray => {
        commentsArray.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.style.border = '1px solid #666';
            commentBlock.style.backgroundColor = '#f2f2f2';
            commentBlock.style.padding = '5px';
            commentBlock.innerHTML = `
            <h3>PostId: ${comment.postId}</h3>
            <h3>CommentId: ${comment.id}</h3>
            <h3>Name: ${comment.name}</h3>
            <p>Email: ${comment.email}</p>
            <p>Body: ${comment.body}</p>
`
            commentsWrapper.appendChild(commentBlock);
        })
    })

document.body.appendChild(commentsWrapper);