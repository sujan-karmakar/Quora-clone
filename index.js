const { v4: uuidv4 } = require('uuid');

const express = require("express");
const app = express();

const port = 8080;

const path = require("path");

const methodOverride = require("method-override");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});



let posts = [
    {
        id: uuidv4(),
        username: "sujan05",
        content: "I love watching movies and TV shows"
    },
    {
        id: uuidv4(),
        username: "lazyGenius",
        content: "Discipline and consistency is the key to success"
    },
    {
        id: uuidv4(),
        username: "ironman3000",
        content: "I love you 3000"
    }
]


//View All Posts
app.get("/posts", (req, res) => {
    console.log(`Request method : ${req.method}, Request path : ${req.path}`);
    res.render("index.ejs", { posts });
});

//Create New Post
app.get("/posts/new", (req, res) => {
    console.log(`Request method : ${req.method}, Request path : ${req.path}`);
    res.render("new.ejs");
});

//Submit New Post
app.post("/posts", (req, res) => {
    console.log(`Request method : ${req.method}, Request path : ${req.path}`);

    let { username, content } = req.body;

    posts.push({ username, content , id : uuidv4()});

    res.redirect("/posts");
});

//Show Post Content
app.get("/posts/:id", (req, res) => {
    console.log(`Request method : ${req.method}, Request path : ${req.path}`);

    let id = req.params.id;
    let post = posts.find((p) => id === p.id);
    if (post) {
        res.render("show.ejs", { post });
    } else {
        res.send("No post with that id");
    }
});

//Update Post Content
app.patch("/posts/:id", (req, res) => {
    console.log(`Request method : ${req.method}, Request path : ${req.path}`);

    let id = req.params.id;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;

    console.log(post);

    res.redirect("/posts");
});


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);

    res.render("edit.ejs", {post});
});

//Delete Post
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);//Filter all other posts to initial post array
    res.redirect("/posts");
});