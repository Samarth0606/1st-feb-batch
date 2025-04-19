let inp = document.querySelector('input');
let h1 = document.querySelector('h1');


inp.addEventListener('input' , function(event){
    h1.innerHTML = event.target.value
})
