function Props({naam,age,kaam,isMarried}){
    
    return(
        <div>
            <h1>{naam}</h1>
            <h1>{age}</h1>
            <h1>{kaam}</h1>
            <h1>{JSON.stringify(isMarried)}</h1>
        </div>
    )
}

export default Props

// ----------------------------------------------

// function Props(propsss){
//     console.log(propsss); //object
    
//     return(
//         <div>
//             <h1>{propsss.naam}</h1>
//             <h1>{propsss.age}</h1>
//             <h1>{propsss.kaam}</h1>
//             <h1>{JSON.stringify(propsss.isMarried)}</h1>
//         </div>
//     )
// }

// export default Props