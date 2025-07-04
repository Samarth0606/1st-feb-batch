import { useRef, useState } from "react";

function Manager(){
    const [count,setCount] = useState(0);
    const countRef = useRef(0);

    function handleClickRef(){
        // console.log(countRef.current++);
        countRef.current++    
    }

    return(
        <div>
            <button onClick={handleClickRef}>Reff : {countRef.current}</button>
            <button onClick={()=>setCount(count+1)} >Counter: {count}</button>
        </div>
    )
}

export default Manager;