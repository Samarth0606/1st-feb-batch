let section = document.querySelector('section');

let h2El = document.createElement('h2')
let h1El = document.createElement('h1')

h2El.innerHTML = "hello i am newly generated h2 tag"
h1El.innerHTML = "hello i am newly generated h1 tag"


// section.appendChild(h2El)
// section.append(h2El)
// section.append(h2El , h1El)
section.prepend(h2El , h1El)

// section.removeChild(h1El)
// section.removeChild(h1El,h2El)
// h1El.remove()
// h2El.remove()
section.remove()



