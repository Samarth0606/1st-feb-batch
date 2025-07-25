import express from "express";
const app = express(); //instance of your application
import mongoose from "mongoose";
import { restaurantRoutes } from "./routes/resturant.routes.js";

mongoose.connect('mongodb+srv://samarthvohraindia:aupXcvSiGnn0k3av@cluster0.coprsny.mongodb.net/') //returns a promise
.then(()=>{
    console.log(`DB CONNECTED`);
})
.catch((err)=>{
    console.log(`DB FAILED` , err);
})

app.use(express.json()) //body parsing middleware

app.get('/' , (req,res)=>{
    res.send("Root route hit")
})

restaurantRoutes(app)

const PORT = 5050;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})



// mongodb+srv://samarthvohraindia:aupXcvSiGnn0k3av@cluster0.coprsny.mongodb.net/
// samarthvohraindia
// aupXcvSiGnn0k3av