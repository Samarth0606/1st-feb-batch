
// const express = require('express')
import express from "express";
const app = express(); //instance of your application

// root path
app.get("/" , (req,res)=>{
    // console.log(req,"req");
    // console.log(res,"res");
    res.send("welcome to express")
})


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server is connected at port: ${PORT}`);
})
