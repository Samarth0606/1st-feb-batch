
function Sam(){
    let a = 10;
    let b = "20";
    let c = true;
    let d = false;
    let e = "undefined";
    let f = null;
    
    return(
        <div>
            <h1>Hello from Sam</h1>
            <h2>{a}</h2>
            <h2>{b}</h2>
            <h2>{JSON.stringify(c)}</h2>
            <h2>{JSON.stringify(d)}</h2>
            <h2>{e}</h2>
            <h2>{JSON.stringify(f)}</h2>
        </div>
    )
}

export default Sam;










