
import { useState } from "react";

function Counterr(){
    const [count,setCount] = useState(0);
    function handleDec(){
        setCount((c)=>c-1)
        setCount(count-1) 
        setCount((c)=>c-3) 
    }
    function handleInc(){
        setCount(count+1)
        setCount(count+1)
        setCount(count+3)
    }

    return(
        <div>
            <button onClick={handleDec}>-</button>
            <h1>Count: {count}</h1>
            <button onClick={()=>handleInc()}>+</button>
        </div>
    )
}

export default Counterr;


// import { useState } from "react";

// function Counterr(){
//     const [count,setCount] = useState(0);
//     const [naam,setNaam] = useState("sam");
//     function handleDec(){
//         setCount((c)=>c-1) // 
//         setCount((c)=>c-1) // 
//         setCount((c)=>c-1) // 
//         setNaam("vohra")   // r1
//     }
//     function handleInc(){
//         setCount((c)=>c+1)
//         setCount((c)=>c+1)
//         setCount((c)=>c+1)
//     }

//     return(
//         <div>
//             <button onClick={handleDec}>-</button>
//             <h1>Count: {count} - {naam} </h1>
//             <button onClick={()=>handleInc()}>+</button>
//         </div>
//     )
// }

// export default Counterr;