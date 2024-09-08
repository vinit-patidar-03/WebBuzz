const express=require('express');
const mongoose=require('mongoose');
const PORT=3000;
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send("hello world")
})

app.post('/register',(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
})