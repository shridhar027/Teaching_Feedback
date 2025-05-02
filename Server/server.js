import express from "express"
import mysql from "mysql"
import nodemon from "nodemon"
import cors from "cors"

const app =express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"teachersfeedback"
})

app.get('/',(req,res)=>{
    const sql = "SELECT * FROM teachers";
    db.query(sql, (err,result)=>{
        if(err)return res.json({Message : "error inside server"});
        return res.json(result);
    })
})

app.get('/question',(req,res)=>{
    const sql = "SELECT * FROM question";
    db.query(sql, (err,result)=>{
        if(err)return res.json({Message : "error inside server"});
        return res.json(result);
    })
})
app.post('/teacher',(req,res)=>{
   const sql = "INSERT INTO teachers(`id`, `name`, `department`, `semester`, `subject`, `image`) VALUES(?)";
   const values = [
    req.body.id,
    req.body.name,
    req.body.department,
    req.body.semester,
    req.body.subject,
    req.body.img
   ] 
   db.query(sql,[values], (err,result)=>{
    if(err)
        return res.json(err);
    return res.json(result);
})
})

app.post('/question',(req,res)=>{
    const sql = "INSERT INTO question(`id`, `subject`, `q1`, `q2`, `q3`, `q4`, `q5`) VALUES (?)";
    const values = [
     req.body.id,
     req.body.subject,
     req.body.question[0],
     req.body.question[1],
     req.body.question[2],
     req.body.question[3],
     req.body.question[4]
    ] 
    db.query(sql,[values], (err,result)=>{
     if(err)
         return res.json(err);
     return res.json(result);
 })
 })

app.listen(8081,()=>{
    console.log("listening");
})