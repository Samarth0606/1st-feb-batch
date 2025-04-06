
// 1. functional/direct calling  ->  window


// function sam(){
//     console.log(this);
// }

// sam(); //direct/functional


// function vohra(){
//     console.log(this , "1"); // window
//     function sam(){
//         console.log(this , "2"); //window
//     }
//     sam();
// }

// vohra();

// --------------------------------


// 2. object/method calling   ->  object

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); //obj
//     }
// }

// obj.fn(); //object/method


// let objjjjjjjjj = {
//     a: 10,
//     bro: function(){
//         console.log(this , "1"); // objjjjjj
//     },
//     fn: {
//         fun: function(){
//             console.log(this , '2'); // fn
//         }
//     }
// }

// objjjjjjjjj.bro();
// objjjjjjjjj.fn.fun();


// --------------------------------


// let obj = {
//     a: 10,
//     sam: function(){
//         console.log(this , "1"); // window
//         function vohra(){
//             console.log(this , '2'); //window
//         }
//         vohra()
//     }
// }

// let out = obj.sam
// out(); //direct/fn 
// ------------------------------
// let obj = {
//     a: 10,
//     sam: function(){
//         console.log(this , "1"); // obj
//         function vohra(){
//             console.log(this , '2'); //window
//         }
//         vohra() //direct
//     }
// }

// obj.sam() //object


// -------------------------------------------

// 3. constructor calling -> newly created object
// new Sam() -> create objects


// function Sam(){
//     this.naam = "sam";
//     this.age = 20
// }

// let s1 = new Sam()
// let s2 = new Sam()

// -------------------------------------------

// 4. indirect calling (most diff)


let obj = {
    a: 10,
    fn: function(x,y,z){
        console.log(this.a ,x ,y ,z); //10
    }
}

let obj2 = {
    a: 50
}

// obj.fn(); // 10
obj.fn.call(obj2,1,2,3) // 50
obj.fn.apply(obj2,[1,2,3]) // 50

// bind -> create a copy of that fn with the new this keyword
let newFn = obj.fn.bind(obj2,1,2,3) // 50
newFn()






// -------------------------------------------
// 5. arrow fn

// let obj = {
//     a: 10,
//     fn:function(){
//         console.log(this); //obj
//     }
// }
// obj.fn()


// let obj = {
//     a: 10,
//     fn:()=>{
//         console.log(this); //window
//     }
// }
// obj.fn()


// let obj = {
//     a: 10,
//     fn:()=>{
//         console.log(this); //window
//         function sam(){
//             console.log(this); //window
//         }
//         sam();
//     }
// }
// obj.fn()


// let obj = {
//     a: 10,
//     fn:()=>{
//         console.log(this); //window
//         let sam = ()=>{
//             console.log(this); //window
//         }
//         sam();
//     }
// }
// obj.fn()


// let obj = {
//     a: 10,
//     fn:function(){
//         console.log(this); //obj
//         let sam = ()=>{
//             console.log(this); //obj
//         }
//         sam();
//     }
// }
// obj.fn()


// let obj = {
//     a: 10,
//     fn:function(){
//         console.log(this); //window
//         let sam = ()=>{
//             console.log(this); //window
//         }
//         sam();
//     }
// }
// let samm = obj.fn
// samm()

// ---------------------------------------------------------------------
//general fn
// function sqaure(n){
//     return n*n
// }

// console.log( sqaure(6) );

// ------------------------------------------
//way - 1
// const sqaure = (n)=>{
//     return n*n
// }

// console.log( sqaure(6) );

// --------------------

// const sum = (a,b) => {
//     return a+b
// }

// console.log(sum(10,5));

// ------------------------------------------

//way - 2
// const sqaure2 = (n)=>{
//     return n*n
// }

// const sqaure = (n)=> n*n


// console.log( sqaure(6) );

// ------------------------------------------

//way - 3
// const sqaure3 = (n)=> n*n

// const sqaure = n => n*n
// console.log( sqaure(6) );


// const sum = (a,b) => a+b
// console.log(sum(10,5));

