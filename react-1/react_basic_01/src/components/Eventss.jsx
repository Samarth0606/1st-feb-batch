function Eventss(){

    function handleEventSam(){
        console.log("hello from events");
    }
    function handleClick2(a,b){
         console.log("hello from events 2" , a , b);
    }
    return(
        <div>
            <h1>Events</h1>
            <button onClick={ handleEventSam }>Click me react</button>
            <div onClick={ ()=> handleClick2(10,"sam") } >press me</div>
        </div>
    )
}

export default Eventss;