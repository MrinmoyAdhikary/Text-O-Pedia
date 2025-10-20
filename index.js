const express=require('express');
const app=express();
const mysql=require('mysql2');
const crypto = require('crypto');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_textOpedia',
    password: 'Mrin9732@',
});


let port=8080;

let path=require("path");

app.set("view engine", "ejs");

app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.listen(port,()=>{
    console.log("App is listening");
});

app.get("/",(req,res)=>{
    console.log("Accessing Home page");
    res.render("Home.ejs");
});

app.get("/signIn",(req,res)=>{
    let {uname,upass}=req.query;
    let loginData=[uname,upass]
    let q=`select uid from logincredentials where uname=? and upass=?`
    try{
        connection.query(q,loginData,(err,result)=>{
            if (err) throw err;
            console.log(result);
            if(result.length>0){
                res.send("Successfully login");
            }
            else{
                console.log("Wrong login credentials")
                res.redirect("/");
            }
        });
    }
    catch(err){
        console.log(err);
    }
});

app.post("/signUp",(req,res)=>{
   

    let{uname ,phnno,dob,upass}=req.body;
    let uid=crypto.randomUUID();
    uname=uname.toLowerCase();
    let userData = [uname, phnno, dob, upass,uid];
    console.log(userData);

    let q=`insert into logincredentials (uname,phnno,dob,upass,uid) values (?,?,?,?,?)`;
    try{
         connection.query(q,userData,(err,result)=>{
        if (err) throw err;
        console.log(result);
        res.redirect("/")
        });
    }
   catch(err){
    console.log(err);
   }
});



