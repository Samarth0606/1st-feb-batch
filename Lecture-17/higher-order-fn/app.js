

//higher order fn
function a(fn){
    console.log("hi i am a");
    fn()
}

//callback fn
function b(){
    console.log("hi i am b");
}

a(b) //arguments

// ---------------------

//higher order fn
function outer(){
    console.log("hi i am outer");
    function inner(){
        console.log("hi i am inner");
    }
    return inner;
}

outer()


