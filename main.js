const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const likedArr = [];
const container = document.getElementById("container");

printInHtml();

const likeBtn = document.getElementsByClassName("js-like-button");

const likeArr = Array.from(likeBtn);
likeArr.forEach((content,index)=>{
    content.addEventListener("click", function(){
        content.classList.add("like-button--liked");
        posts[index].likes++;
        const likeHtmlArr = document.getElementsByClassName("js-likes-counter");
        likeHtmlArr[index].innerHTML = posts[index].likes;
        likedArr.push(index);
    })
})

function printInHtml(){
    posts.forEach((content,i) =>{

        container.innerHTML +=`
        <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            ${profileImg(content)}
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${content.author.name}</div>
                            <div class="post-meta__time">${formatDate(content.created)}</div>
                            <div class="post-meta__time">${differenceBetweenDate(content.created)}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${content.content}</div>
                <div class="post__image">
                    <img src="${content.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon  fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label ">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${content.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>` 
    });
          
}


const currentDate = new Date();
const objDate = new Date(posts[0].created);
const diffTime = Math.abs(currentDate - objDate);
const diffMonth = Math.round(diffTime / (1000 * 60 * 60 * 24 * 30)); 





function formatDate(dateString){

    const dateToFormat = new Date(dateString);
    return `${dateToFormat.getDate()}-${dateToFormat.getMonth()+1}-${dateToFormat.getFullYear()}`
}

function differenceBetweenDate(dateString){
    const currentDate = new Date();
    const objDate = new Date(dateString);
    const diffTime = Math.abs(currentDate - objDate);
    const days = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
    if(days > 60){
        return `${Math.round(days / 30)} month ago`;
    }else return `${days}days ago`
    
}

function profileImg(obj){
    const author = obj.author; 
    if(author.image) {
        return `
        <img class="profile-pic" src="${author.image}" alt="${author.name}"> 
        `
    } else {
        return `
        <div class="profile-pic-default"><span>${getFirstLetters(obj)}</span></div>
        `
    }
}

function getFirstLetters(obj){
    
    const author = obj.author.name; 

    const arrName = author.split(/\s+/);
    let str = ""
    arrName.forEach((element) => {
        str += element.charAt(0);
    })
    console.log(str);
    return str
}
