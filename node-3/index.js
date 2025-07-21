
import express from 'express';
const app = express() //instance of applicaation\

let dummyArr = [
    {
        id: 1,
        title: "JavaScript",
        content: "Everthing inside JS is an object"
    },
    {
        id: 2,
        title: "React",
        content: "Component renders when state changes"
    },
    {
        id: 3,
        title: "NodeJS",
        content: "Nodemon helps you restart the server automatically"
    }
]
// root route
app.get('/' , (req,res)=>{
    res.send("Welcome to root route")
})

// RESTapi (without MVC)
// READ
app.get('/blogs' , (req,res)=>{
    res.send(dummyArr)
})

// CREATE (can your browser send post request directly?) => NO = Thunderclient
app.post('/blogs' , (req,res)=>{
    dummyArr.push({id:(dummyArr.length+1), title:"Tailwind", content:"Less code than naive"})
    res.send(dummyArr);
})


const PORT = 5050;
app.listen(PORT , ()=>{
    console.log(`Server connected at port: ${PORT}`);
})