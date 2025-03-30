


// function abc(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }

// abc();

// --------------------------\


function abc(){
    var a = 10;
    var b = 20;
    function inner(){
        console.log(a);
    }
    return inner;
}

let returnedVal = abc();
// let returnedVal =   function inner(){
//                         console.log(a);
//                     }
console.log(returnedVal);
returnedVal()







