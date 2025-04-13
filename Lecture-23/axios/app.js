// axios with promise

axios.get("https://api.tvmaze.com/search/shows?q=girls")
.then(function(resp){
    // console.log(resp , "then"); //complete data at once
    console.log(resp.data , "then"); //complete data at once
})
.catch(function(err){
    console.log(err , "catch");
})




// ---------------------------------
// axios with async-await

async function callApi2() {
    let resp = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
    // console.log(resp);
    console.log(resp.data);
}

callApi2()