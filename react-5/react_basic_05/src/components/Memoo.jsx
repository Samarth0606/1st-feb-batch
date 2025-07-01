import { Fragment, memo, useState } from "react";

function Memoo({remote}){
    const [door,setDoor] = useState(remote)
    function handleChange(){
        setDoor(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <h1>Hello from {door}</h1>
            <button onClick={handleChange} >Change the above h1</button>
            <Chotu book="System Design 1" />
            <Chotu book="System Design 2" />
            <Chotu book="System Design 3" />
        </div>
    )
}

const Chotu = memo( function({book}){
    return(
        <h1> Hello from {book} </h1>
    )
} )

// function Chotu({book}){
//     return(
//         <h1> Hello from {book} </h1>
//     )
// }

export default Memoo;