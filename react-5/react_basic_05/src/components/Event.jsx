import { useState } from "react";

function Event(){

    let [text,setText] = useState("");

    function handleChange(e){
        setText(e.target.value)
    }

    return(
        <div>
            <h1> {text} </h1>
            <input onChange={handleChange} type="text" value={text}  />
        </div>
    )
}

export default Event;