


// function sam(){

// }
// console.log( sam() ); //undefined

// // ----------------------------------

// //constructor -> create objects
// function sam(){

// }
// console.log( new sam() ); //empty object


// ----------------------------------------------------


// function Person(name,age,color,mail){
function Person(naam,umar,favColor,email){
    // this.key = value;
    this.naam = naam;
    this.umar = umar;
    this.favColor = favColor;
    this.email = email;
    // this.greet = function(){
    //     console.log("hello, suprabhat");
    // }
}

Person.prototype.greet = function(){
        console.log("hello, suprabhat");
    }

const p1 = new Person("Sam" , 99 , "black" , "sam@gmail.com");
const p2 = new Person("Mav" , 23 , "brown" , "bhaubhau@gmail.com");

console.log(p1);
console.log(p2);




