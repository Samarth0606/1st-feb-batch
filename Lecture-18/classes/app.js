

function Sam(naam , salary){
    this.name = naam;
    this.money = salary;
    this.bye = function(){console.log("bye bye");}
}
let s1 = new Sam("vohra" , 400);
console.log(s1);

// -----------------------------------------------

class Sam2{
    constructor(naam , salary){
        this.name = naam;
        this.money = salary;
        // this.bye = function(){console.log("bye bye");}
    }
    bye(){
        console.log("bye bye");
    }
    detail(){
        console.log("hello vohra");
    }
}

let s2 = new Sam2("vohra" , 400);
console.log(s2);














