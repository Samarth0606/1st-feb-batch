let red = document.querySelector('#red')
let green = document.querySelector('#green')
let blue = document.querySelector('#blue')
let body = document.querySelector('body')

red.addEventListener('click' , function(){
    body.style.backgroundColor = "red"
})
green.addEventListener('click' , function(){
    body.style.backgroundColor = "green"
})
blue.addEventListener('click' , function(){
    body.style.backgroundColor = "blue"
})



