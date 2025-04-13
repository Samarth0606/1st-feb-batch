


// function sam(){

// }

// console.log( sam() );

// -------------------------

// function sam2(){

// }

// console.log( new sam2() );

// // -------------------------

// async function sam(){

//     return 100;
// }

// console.log( sam() );


// -------------------------

// async function sam(){

//     return new Promise((resolve)=>resolve("lol"));
// }

// console.log( sam() );


// -------------------------



// async function callApi1(){
//     console.log(20);
//     console.log(30);
//     // calling api
//     let data = await fetch('https://api.tvmaze.com/search/shows?q=girls')
//     console.log(data);
//     console.log(40);
// }

// console.log(10);

// callApi1()

// console.log(50);

// // -------------------------

// async function callApi1(){
//     console.log(20);
//     console.log(30);
//     // calling api
//     let data = await fetch('https://api.tvmaze.com/search/shows?q=girls')
//     let resp = await data.json()
//     console.log(resp);
//     console.log(40);
// }

// console.log(10);

// callApi1()

// console.log(50);



// -------------------------------------------


// --------------------------------------------------------
async function callApi1(){
    console.log(20);
    console.log(30);
    let data = await fetch('https://api.tvmaze.com/search/shows?q=girls')
    let resp = await data.json()
    console.log(resp , "1");
    console.log(40);
}

async function callApi2(){
    console.log(200);
    console.log(300);
    let data = await fetch('https://api.tvmaze.com/search/shows?q=superman')
    let resp = await data.json()
    console.log(resp , "2");
    console.log(400);
}

console.log(10);
callApi1()
console.log(50);

console.log(100);
callApi2()
console.log(500);

//older
// 10
// 20
// 30
// 50
// 100
// 200
// 300
// 500
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] '1'
// 40
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] '2'
// 400

//newer

// 10
// 20
// 30
// 50
// 100
// 200
// 300
// 500
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] '2'
// 400
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] '1'
// 40