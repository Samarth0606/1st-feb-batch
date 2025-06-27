import { useEffect, useState } from "react";

function Lifecycle(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        if(count === 0){
            console.log("component did mount");  
        }
        else if(count>0 && count<5){
            console.log("component did update");  
        }
        else if(count === 5){
            return ()=>{ 
                console.log("component will unmount") 
            }
        }
    } , [count])

    return(
        <div>
            <h1>Hello from lifecycle : {count}</h1>
            <button onClick={()=>setCount(count+1)} >INC</button>
        </div>
    )
}
export default Lifecycle;