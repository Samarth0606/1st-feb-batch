
// let inp = document.querySelector('input');

// inp.addEventListener('input', function(event){
//     // console.log("input ched dia");
//     // console.log(event);
//     // console.log(event.target);
//     console.log(event.target.value);
    
//     // event.target.value = "doreamon" //setter
// })


// ------------------------------------------------


let inp = document.querySelector('input');

inp.addEventListener('keydown', function(event){
    // if(event.key === "Enter"){
    if(event.which === 13){
        console.log(event.target.value);
    }
})






