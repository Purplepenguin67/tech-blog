const { Post } = require("../models");

const postseeds = 

[
    {
        "postTitle": "Studying hard"
        "postContent": "I studyed for 5 hours today"
        "userID" 1

    },
    {
        "postTitle": "learning JS today"
        "postContent": "Its easier than I thought"
        "userID" 2

    },
    {
        "postTitle": "Learning MVC"
        "postContent": "Learned alot in class"
        "userID" 3

    },
    {
        "postTitle": "Learning Heroku"
        "postContent": "Heroku never works the first time"
        "userID" 4

    },
];

const seedPost = () => Post.bulkCreate(postseeds);
module.exports = seedPost;