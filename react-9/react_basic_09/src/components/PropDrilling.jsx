import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

function PropDrilling() {
    const [count,setCount] = useState(0);

  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount} />
        </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
    return(
        <div>
            <CountRender />
            <Buttons setCount={setCount} >INC</Buttons>
        </div>
    )
}

function Buttons({setCount}){
    let count = useContext(CountContext);
    return (
        <button onClick={()=>setCount(count+1)} > INC </button>
    )
}

function CountRender(){
    let count = useContext(CountContext)
    return(
        <h1> {count} </h1>
    )
}

export default PropDrilling;

// -----------------------------------------------------------

// import React, { useState } from 'react'

// function PropDrilling() {
//     const [count,setCount] = useState(0);

//   return (
//     <div>
//         <Count count={count} setCount={setCount} />
//     </div>
//   )
// }

// function Count({count,setCount}){
//     return(
//         <div>
//             <CountRender count={count} />
//             <Buttons count={count} setCount={setCount} >INC</Buttons>
//         </div>
//     )
// }

// function Buttons({count,setCount}){
//     return (
//         <button onClick={()=>setCount(count+1)} > INC </button>
//     )
// }

// function CountRender({count}){
//     return(
//         <h1> {count} </h1>
//     )
// }

// export default PropDrilling;