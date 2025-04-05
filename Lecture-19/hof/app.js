

//hof
// function big(x){
//     // console.log(x);
//     x()
    
//     console.log(" i am big");
// }

//callback fn
// function small(){
//     console.log("i am small");
// }

// big(small)


// -----------------------------------------


//array method (HOF)
// 1. forEach() -> accepts a cb fn -> 2 args -> doesnot returns anything

// let arr = [10,20,30,40,50]

// let retuendVal = arr.forEach( function(item,index){
    //     console.log(item*item);
    // } )
    
    // console.log(retuendVal);
    
    
// -----------------------------------------
    
// 2. map() -> accepts a cb fn -> 2 args -> returns a new array -> (length remain same as your original array)


// let arr = [10,20,30,40,50]

// let returnedArr = arr.map( function(item,index){
//     return item+index
// } )

// console.log(arr);
// console.log(returnedArr);


// -----------------------------------------
    
// 3. filter() -> accepts a cb fn -> 2 args -> returns a new array -> (length of newarr is not fixed)


// let arr = [10,20,30,40,50]

// let filteredArr = arr.filter( function(item,index){
//     if(item%10 === 0){ //truthy condition
//         return true
//     }
// } )

// console.log(arr);
// console.log(filteredArr);



// Write a function that takes an array of numbers, doubles each value, and then filters out the values greater than 10.

// let arr = [1,2,3,4,5,6,7]
// function sam(arr){
//     let newArr = arr.map(function(item,index){
//         return item*2
//     })
//     let filteredArr = newArr.filter(function(item,index){
//         if(item>=10){return true}
//     })
//     return filteredArr
// }
// console.log( sam(arr) );


// let arr = [1,2,3,4,5,6,7]
// function sam(arr){
//     return arr.map(function(item,index){
//         return item*2
//     }).filter(function(item,index){
//         if(item>=10){return true}
//     })
// }
// console.log( sam(arr) );


// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.


// let arr = [1,2,3,4,5,6,7]
// function sam(arr){
//     return arr.filter(function(item){
//         if(item%2 === 0){return true}
//     })
// }
// console.log( sam(arr) );


// -----------------------------------------
//find

// let arr = [10,20,30,40,50];

// let returnedVal = arr.find( function(item,index){
    //     if(item === 300){return item}
    // } )
    
    // console.log(returnedVal);
    
    // let arr = [10,20,30,40,50];
    
    // let returnedVal = arr.find( function(item,index){
    //     if(item === 30){
    //         console.log(index);
    //         return true
    //     }
    // } )
    
    // console.log(returnedVal);
        
            
// -----------------------------------------


// let arr = [10,20,35,45,50];

// let out = arr.some( function(item,index){
//     if(item%10 === 0){
//         console.log("checked");
//         return true
//     }
// } )

// console.log(out);

// -----------------------------------------

// let arr = [10,20,30,40,50];

// let out = arr.every( function(item,index){
//     if(item%10 === 0){
//         console.log("checked");
//         return true
//     }
// } )

// console.log(out);