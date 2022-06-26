const express = require('express');
const ejs = require('ejs');
const app = express()
const mongoose = require('mongoose')
const projectRoute = require("./routes/projectRoute");
const Project = require('./models/Project');
const methodOverride = require("method-override");


// app.use
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
// mongo connection...
mongoose.connect("mongodb://localhost:27017/agency", { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB");
});


// routes 
app.use("/projects", projectRoute)


app.get("/", async(req,res) => {
    const projects = await  Project.find()
    res.render("index", {projects: projects})});



// server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})