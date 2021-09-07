const express = require('express');
const bodyParser=require('body-parser');
const app=express();
// const mysql=require('mysql');
const db=require('../../index')

db.connect((err)=>{
    if(err) throw err;
    console.log('Mysql connected...')
})

app.get('api/products',(req,res)=>{
    let sql="SELECT * FROM product";
    let query=db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({"status":200, "error":null,"response":result}))
    })
})

//Server listening
app.listen(3000,() =>{
    console.log('Server started on port 3000...');
  });