// selection
// 1. getElementsByTagname()
// let allH1 = document.getElementsByTagName('h1'); //array
// console.log(allH1[0]); 
// console.log(allH1[1]); 

// manipulation
// allH1[0].style.color = "orange"
// allH1[0].style.backgroundColor = "blue"
// allH1[0].style.fontSize = "70px"
// allH1[0].style.border = "10px solid black"

// ------------------------------------------------

// 2. getElementById() -> first occurance

// let idddd = document.getElementById('sam');
// console.log(idddd);

//wet ❌
// idddd.style.color = "orange"
// idddd.style.backgroundColor = "blue" //camelcase
// idddd.style.fontSize = "70px"

// dry ✅
// idddd.style.cssText = `
//     color:red;
//     background-color: blue; //kabab case
//     font-size: 70px;
//     border:10px solid black
// `

// ------------------------------------------------

// 3. getElementsByClassName() -> arraylike 

// let allClasses = document.getElementsByClassName('vohra')
// console.log(allClasses);

//wet
// allClasses[0].style.cssText = `
//     color:red;
//     background-color: blue; //kabab case
//     font-size: 70px;
//     border:10px solid black
// `
// allClasses[1].style.cssText = `
//     color:red;
//     background-color: blue; //kabab case
//     font-size: 70px;
//     border:10px solid black
// `
// allClasses[2].style.cssText = `
//     color:red;
//     background-color: blue; //kabab case
//     font-size: 70px;
//     border:10px solid black
// `

//dry
// for(let item of allClasses){
//     item.style.cssText = `
//         color:red;
//         background-color: blue; //kabab case
//         font-size: 70px;
//         border:10px solid black
//     `
// }


// --------------------------------------------------


// 4. querySelector (single element) -> id , class , tag


// let tagg = document.querySelector('h1') // 1
// let idd = document.querySelector('#sam') // 1
// let classs = document.querySelector('.vohra') // 1

// console.log(tagg);
// console.log(idd);
// console.log(classs);


// --------------------------------------------------

// 5. querySelectorAll (all elements) -> id , class , tag
let element1 = document.querySelectorAll('h1')
let element2 = document.querySelectorAll('#sam')
let element3 = document.querySelectorAll('.vohra')

console.log(element1);
console.log(element2);
console.log(element3);

