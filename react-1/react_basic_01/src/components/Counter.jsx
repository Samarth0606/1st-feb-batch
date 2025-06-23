import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);

    function handleDec(){
        setCount( (c)=> c-1 ) //-1
        setCount( (d)=> d-1 ) //-2
        setCount( (e)=> e-1 ) //-3
    }
    function handleInc(){
       setCount( (c)=> c+1 )
       setCount( (c)=> c+1 )
       setCount( (c)=> c+1 )
    }

    return(
        <div>
            <button onClick={handleDec}>-</button>
            <h1>Count: {count} </h1>
            <button onClick={()=> handleInc()} >+</button>
        </div>
    )
}

export default Counter;




// import { useState } from "react";

// function Counter(){
//     const [count,setCount] = useState(0);

//     function handleDec(){
//         console.log(count , "1");
//         setCount(count-1)
//         console.log(count , "2");
//         setCount(count-1)
//         console.log(count , "3");
//         setCount(count-1)
//         console.log(count , "4");
//     }
//     function handleInc(){
//         setCount(count+1)
//         setCount(count+1)
//         setCount(count+1)
//     }

//     return(
//         <div>
//             <button onClick={handleDec}>-</button>
//             <h1>Count: {count} </h1>
//             <button onClick={()=> handleInc()} >+</button>
//         </div>
//     )
// }

// export default Counter;


// -----------------------------------------


// import { useState } from "react";

// function Counter(){
//     const [count,setCount] = useState(0);

//     function handleDec(){
//         setCount(count-1)
//     }
//     function handleInc(){
//         setCount(count+1)
//     }

//     return(
//         <div>
//             <button onClick={handleDec}>-</button>
//             <h1>Count: {count} </h1>
//             <button onClick={()=> handleInc()} >+</button>
//         </div>
//     )
// }


// export default Counter;