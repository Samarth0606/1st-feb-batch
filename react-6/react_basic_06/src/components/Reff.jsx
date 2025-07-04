import { useEffect, useRef, useState } from "react";


function Reff(){

    // let salary = 400000;
    const [salary,setSalary] = useState(40000)
    let spanEl = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            // document.getElementById('sal').innerHTML = "2000"
            // console.log(spanEl.current);
            spanEl.current.innerHTML = "200"
        } , 3000)
    } , [])

    return(
        <div>
            <h1>Salary is: <span ref={spanEl} >{salary}</span> </h1>
        </div>
    )
}

export default Reff;