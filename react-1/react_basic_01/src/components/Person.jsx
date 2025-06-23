import { useState } from "react";

function Person({naam}){

    const [username,setUsername] = useState(naam);

    function handleLogout(){
        console.log(username, "before");
        // username = "anonymous" // cant change the state directly
        setUsername("Anonymous")
        console.log(username, "after");
    }

    return(
        <div>
            <h1>Name: {username} </h1>
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}

export default Person;


// ------------------------------------------


// function Person({naam}){

//     let username = naam;
//     function handleLogout(){
//         console.log(username, "before");
//         username = "anonymous"
//         console.log(username, "after");
//     }

//     return(
//         <div>
//             <h1>Name: {username} </h1>
//             <button onClick={handleLogout} >Logout</button>
//         </div>
//     )
// }

// export default Person;