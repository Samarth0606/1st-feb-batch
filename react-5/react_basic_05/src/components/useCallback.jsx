import { memo, useCallback, useState } from "react";

function UseCallback(){

    const [count,setCount] = useState(0);

    // let data = function(){return "sam"};
    let data = useCallback( function(){return "sam"} , [] )

    return(
        <div>
            <h1>USECALLBACK - {count}</h1>
            <button onClick={()=>setCount(count+1)} >Counter</button>
            <Chotu d={data} />
        </div>
    )
}

const Chotu = memo( function({d}){
    return(
        <div>
            <h1>DATA: {d()}</h1>
        </div>
    )
    }
 )



export default UseCallback;