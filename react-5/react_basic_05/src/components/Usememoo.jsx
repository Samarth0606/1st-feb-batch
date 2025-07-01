import { useMemo, useState } from "react";

function Usememoo(){
   const [count,setCount] = useState(0);
   const [inp,setInp] = useState(0);

   function handleInp(e){
        setInp(e.target.value)
   }
   
//    let ans = 0;
//    for(let i=1;i<=inp;i++){
//     console.log("loop ran");
//     ans+=i;
//    }

   const summ = useMemo( function(){
    let ans = 0;
    for(let i=1;i<=inp;i++){
        console.log("loop ran");
        ans+=i;
    }
    return ans;
   }, [inp] )

    return(
        <div>
            <input onChange={handleInp} type="text" value={inp} />

            <h1>Sum: {summ} </h1>
            <button onClick={()=>setCount(count+1)} > INCREMENT: {count} </button>
        </div>
    )
}

export default Usememoo;