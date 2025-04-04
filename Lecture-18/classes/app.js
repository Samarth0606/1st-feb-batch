

// function Sam(naam , salary){
//     this.name = naam;
//     this.money = salary;
//     this.bye = function(){console.log("bye bye");}
// }
// let s1 = new Sam("vohra" , 400);
// console.log(s1);

// -----------------------------------------------

// class Sam2{
//     constructor(naam , salary){
//         this.name = naam;
//         this.money = salary;
//         // this.bye = function(){console.log("bye bye");}
//     }
//     bye(){
//         console.log("bye bye");
//     }
//     detail(){
//         console.log("hello vohra");
//     }
// }

// let s2 = new Sam2("vohra" , 400);
// console.log(s2);

// ---------------------------------------------------


// class Person{
//     constructor(naam , age , color){
//         this.name = naam;
//         this.age = age;
//         this.color = color;
//     }
// }
// class Student{
//     constructor(naam , age , color){
//         this.name = naam;
//         this.age = age;
//         this.color = color;
//     }
// }

// let p1 = new Person('vohra' , 40 , "blue")
// let p2 = new Student('mav' , 4 , "orange")
// console.log(p1);
// console.log(p2);

// -------------------------------------------------


// class Person{
//     constructor(naam , age , color){
//         this.name = naam;
//         this.age = age;
//         this.color = color;
//     }
//     greet(){console.log("balle balle");}
// }
// class Student extends Person {}

// let p1 = new Person('vohra' , 40 , "blue")
// let p2 = new Student('mav' , 4 , "orange")
// console.log(p1);
// console.log(p2);


// -----------------------------------------------

class Person{
    constructor(naam , age , color){
        this.name = naam;
        this.age = age;
        this.color = color;
    }
    greet(){console.log("balle balle")}
}
class Student extends Person {
    constructor(naam , age , color, rollnum){
        super(naam , age , color)
        this.rollnum = rollnum
    }
    bye(){console.log("shava shava")}
    greet(){console.log("chalaa mia to ghoomnne")}
}

let p1 = new Person('vohra' , 40 , "blue")
let p2 = new Student('mav' , 4 , "orange" , 420)
console.log(p1);
console.log(p2);
p2.greet() //child




