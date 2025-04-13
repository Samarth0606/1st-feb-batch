
// fetch with promise

fetch("https://api.tvmaze.com/search/shows?q=girls") //retuns a promise
.then(function(data){
    // console.log(data , "then"); //partial data
    return data.json() //returns a promise
})
.then(function(resp){
    console.log(resp , "complete data");
})
.catch(function(err){
    console.log(err , "catch");
})  


// -------------------------------------------------
// fetch with async-await

async function callApi(){
    let data = await fetch("https://api.tvmaze.com/search/shows?q=girls") //partial data
    let resp = await data.json() //complete data
    console.log(resp);
}

callApi()



















