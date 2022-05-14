import {SAMPLE_POSTS} from "../data/posts.js"

const posts = document.getElementById("posts");
const topPost = document.getElementById("post-content");
const imgPost = document.getElementById("top-post-img");
const postTitle = document.getElementById("post-title");
const subTitlePost = document.getElementById("post-subtitle");
const postDate = document.getElementById("post-date");
const postAuthor = document.getElementById("post-author");
//references for tags
const postTags = document.getElementById('post-footer');

function createTopPost(){
    //this is the only static assign that is done once
    imgPost.src = SAMPLE_POSTS[0].photo;
    topPost.innerText = SAMPLE_POSTS[0].intro;
    postTitle.innerText = SAMPLE_POSTS[0].title;
    subTitlePost.innerText = SAMPLE_POSTS[0].subTitle;
    postDate.innerText = SAMPLE_POSTS[0].date;
    postAuthor.innerText = "Written by " + SAMPLE_POSTS[0].author;
    //end of static assign
    // tags
    let preperTags = createTags(SAMPLE_POSTS[0].tags);
    //retrieving tags from container (collection)
    postTags.innerHTML = preperTags[0] + preperTags[1] + preperTags[2];

    // console.log(createSinglePost(SAMPLE_POSTS[1]));
    for(let i = 1; i < SAMPLE_POSTS.length; i++)
    posts.innerHTML += createSinglePost(SAMPLE_POSTS[i]);
}

function createTags(tags={}){
    //retrieve values from tags and return a HTML body
    let objTags = {} //to retrieve tags id from HTML

    for(var i = 0; i < tags.length; i++){

        objTags[i] = "<span class='badge btn btn-primary me-2 mb-md-2'>"+"#"+tags[i]+"</span>";
    }
    //it will return an array 
    return objTags;
}

function createSinglePost(singlePost){
    //invoking createTags() to retrieve an array of tags elements
    //and use it later
  
    let preperTags = createTags(singlePost.tags);

    let htmlContent = `    
                    <div class='card shadow'> 
                    <img class='card-img-top img-fluid shadow rounded-3' src=${singlePost.photo}>
                    <div class='card-body'> 
                    <b class='text-muted d-block mb-4'>${singlePost.date}</b>
                    <h4 class='card-title mb-1'>${singlePost.title}</h4> 
                    <h4 class='card-subtitle text-muted mb-4'>${singlePost.subTitle}</h4> 
                    <p class='card-text'>${singlePost.intro}</p> 
                    <p class='text-muted d-flex align-items-center'>
                    <span class='material-icons mb-4'>person</span>
                    ${"Written by "+singlePost.author}
                    </p>
                    <div class='card-footer'> 
                    <span>${preperTags[0]}</span> 
                    <span>${preperTags[1]}</span>
                    <span>${preperTags[2]}</span>
                    </div>
                    </div> 
                    </div>`;
                        
    //returning html content    
    return htmlContent;
}

createTopPost();