// let btn = document.querySelector('button')
// let div = document.querySelector('div')

// function handleBtn(){ console.log("i am btn") }
// function handleDiv(){ console.log("i am div") }

// btn.onclick = handleBtn
// div.onclick = handleDiv

// ----------------------------------------------------

// let btn = document.querySelector('button')


// function iceCream(){ console.log("i scream you scream we all scream for icecream") }
// function momozzzz(){ console.log("i love momozzzz") }

// btn.onclick = iceCream
// btn.onclick = momozzzz //overriding

// ----------------------------------------------------
// 3rd way

let btn = document.querySelector('button')


function iceCream(){ console.log("i scream you scream we all scream for icecream") }
function momozzzz(){ console.log("i love momozzzz") }

// addEventListener (best)
btn.addEventListener('click' , iceCream)
btn.addEventListener('click' , momozzzz)




