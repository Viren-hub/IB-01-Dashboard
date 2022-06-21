const express=require('express');
const bodyparser= require('body-parser');
const cors= require('cors');
const mysql= require('mysql2');
const { log } = require('console');
const app= express();

app.use(cors());
app.use(bodyparser.json());

//database connection
const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'',
    port:3306
})

// check connection

db.connect(err=>{
    if(err){console.log(err);}
    else
    {
        console.log("connected")
    }
})

//fetch data from server
//here "student" is the table name which is in databse
app.get('/student',(req,res)=>{
   let qr=' SELECT * FROM student';
   db.query(qr,(err,result)=>{
    if(err){console.log(err)}
    else if(result.length>0){
        res.send({
            massage:"all student Data",
            data:result
        })
    }
   })
});

//post Data


app.listen(3000,()=>{
    console.log("server listen on port 3000")
})

