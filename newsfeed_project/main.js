// grabbing DOM Elements that I need

//maklng api call to get user info
function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data));
}

// fetching data for users and displaying info to screen
function displayUser(data) {

    const createData = [...data];

    const create = createData.map(function (user) {
        return user.username
    })

    create.forEach(function (user) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('left-section')

        createDiv.innerHTML = `
                <p>${user}<p>
        `
        const leftSection = document.querySelector('.left-section');
        leftSection.appendChild(createDiv);
    })

}
// function to make api call to fetch comments from api
function getComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComments(data))
}
// displaying comments to screen
function displayComments(data) {

    const commentArray = [];

    for (let i = 0; i <= 2; i++) {
        data.forEach(function (comment) {
            commentArray.push({
                name: comment.name,
                email: comment.email,
                body: comment.body
            })
        })

        const createCommentDiv = document.createElement('div');

        createCommentDiv.innerHTML =

            `<div class="one">
            <p> Name:   ${commentArray[i].name}</h1>
             </p>  Email:  ${commentArray[i].email}</p>
               </p>Body:  ${commentArray[i].body}</p>
               </div>
            `

        const rightSection = document.querySelector('.right-section');

        rightSection.appendChild(createCommentDiv);

    }
}
// fetching post data from api
function getPosts(data) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data));
}

// displaying post from api
function displayPosts(data) {
    const createPost = []

    const createUser = [{
            id: 1,
            name: 'Cody Williams',
            img: 'one.jpg',
            date: 'October 22nd 2021'
        },
        {
            id: 2,
            name: 'Sarah Smith',
            img: 'three.jpg',
            date: 'October 22nd 2021'
        },
        {
            id: 3,
            name: 'Hammer Jackson',
            img: 'two.png',
            date: 'October 22nd 2021'
        }

    ]

    for (let i = 0; i <= 2; i++) {
        data.forEach(function (post) {


            createPost.push({

                    title: post.title,
                    body: post.body

                }

            )
        })
        const postdiv = document.createElement('div');
        postdiv.classList.add('.second-middle-middle');
        postdiv.innerHTML = `

        <div class = "second-middle-top" >
         
            <img src = "${createUser[i].img}" alt = "" class = "resize" >
                    <div class = "together" >
                    <p class = "bold" > ${createUser[i].name}</p>
                    <p> ${createUser[i].date}</p>
              </div>
       
             </div>
            </div>
            <div class="one">
                <p> Title: ${createPost[i].title}</p>
               <p> Body:  ${createPost[i].body}</p>
               </div>
  <div class = "second-middle-bottom" >
 <a href = "#" > Reply </a> <a href ="#"> Like </a>
  </div>
                
            `

        const secondMiddlemiddle = document.querySelector('.second-middle-section');

        secondMiddlemiddle.appendChild(postdiv);




    }
}




getPosts();
getComments();
getUsers();