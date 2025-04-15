let imgEl = document.querySelector('img');


const imgArr = [
    'https://images.unsplash.com/photo-1741761446510-7804410eade3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1741513543210-c17d608be117?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1726137569914-ae2ad1c634f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1741683386377-f59badc91174?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'
]

let i = 0;
let iddd = setInterval( function(){
    imgEl.setAttribute('src' , imgArr[i]);
    i = (i + 1) % imgArr.length;
}, 2000 )


// after a total of 30s image should not change
setTimeout(function(){
    clearInterval(iddd)
} , 30000)
