import { useEffect, useState } from "react"

function Effects(){
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        async function callingApi(){
            const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await resp.json();
            console.log(data);
            setTodos(data);
        }
        callingApi()
    } , [])
    
    return(
        <div>
            <h1>useEffect</h1>
            {
                todos.map((item)=>{
                    return(
                        <div>
                            <h1>Title: {item.title} </h1>
                            <h1>Complete Status: {JSON.stringify(item.completed)} </h1>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Effects;



// -----------------------------------------------


// import { useEffect, useState } from "react"
// import axios from 'axios';

// function Effects(){
//     const [todos,setTodos] = useState([])

    
//     useEffect(()=>{

//         async function callApi(){
//             const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
//             console.log(resp.data);
//             setTodos(resp.data)
//         }
//         callApi()
        
//     } , [])
    
//     return(
//         <div>
//             <h1>useEffect</h1>
//             {
//                 todos.map((item)=>{
//                     return(
//                         <div>
//                             <h1>Title: {item.title} </h1>
//                             <h1>Complete Status: {JSON.stringify(item.completed)} </h1>
//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default Effects;


// ----------------------------------------------------


// import { useEffect, useState } from "react"
// import axios from 'axios';

// function Effects(){
//     const [todos,setTodos] = useState([])

    
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//         .then((resp)=>{ 
//             console.log(resp.data) 
//             setTodos(resp.data)
//         })
//     } , [])
    
//     return(
//         <div>
//             <h1>useEffect</h1>
//             {
//                 todos.map((item)=>{
//                     return(
//                         <div>
//                             <h1>Title: {item.title} </h1>
//                             <h1>Complete Status: {JSON.stringify(item.completed)} </h1>
//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default Effects;

// -----------------------------------------------

// import { useEffect, useState } from "react"

// function Effects(){
//     const [todos,setTodos] = useState([])
//     const [count,setCount] = useState(0)
    
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((resp)=>{ return resp.json() })
//         .then((data)=>{ 
//             console.log(data) 
//             setTodos(data)
//         })
//     } , [count])
    
//     return(
//         <div>
//             <h1>useEffect</h1>
//             <button onClick={()=>setCount(count+1)}>Counter- {count}</button>

//             {
//                 todos.map((item)=>{
//                     return(
//                         <div>
//                             <h1>Title: {item.title} </h1>
//                             <h1>Complete Status: {JSON.stringify(item.completed)} </h1>
//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default Effects;


// --------------------------------------------------

// import { useEffect, useState } from "react"

// function Effects(){
//     const [todos,setTodos] = useState([])
//     let abc = 10;
//     function handleAbc(){
//         abc = Math.floor(Math.random()*10)
//         console.log(abc);
//     }
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((resp)=>{ return resp.json() })
//         .then((data)=>{ 
//             console.log(data) 
//             setTodos(data)
//         })
//     } , [abc])
    
//     return(
//         <div>
//             <h1>useEffect - {abc}</h1>
//             <button onClick={handleAbc} >change abc</button>
//             {
//                 todos.map((item)=>{
//                     return(
//                         <div>
//                             <h1>Title: {item.title} </h1>
//                             <h1>Complete Status: {JSON.stringify(item.completed)} </h1>
//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default Effects;

// -------------------------------------------------


// import { useEffect } from "react";

// function Effects(){

//     useEffect(function(){
//         setTimeout(()=>{
//             console.log("hello");
//         }, 1000)
//     },[])


//     return(
//         <div>
//             <h1>useEffect</h1>
//         </div>
//     )
// }

// export default Effects;