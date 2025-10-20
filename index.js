const express=require('express');
const app=express();

let port=8080;

let path=require("path");

app.set("view engine", "ejs");

app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")));
app.listen(port,()=>{
    console.log("App is listening");
});

app.get("/",(req,res)=>{
    console.log("Accessing Home page");
    res.render("Home.ejs");
});

