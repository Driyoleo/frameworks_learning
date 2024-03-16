import express from "express";

const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.sendFile("public/index.html",{root:"C:"});
})

app.listen(port,(req,res)=>{
    console.log(`running on http://localhost:${port}/`);
})