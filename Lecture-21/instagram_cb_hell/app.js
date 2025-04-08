

function step1(fn){
    console.log("pleasse wait i am selecting image...");
    setTimeout(function(){
        console.log("selected image");
        fn("selected image")
    } , 5000)
}
function step2(img, fn){
    console.log(`pleasse wait i am adding filter to ${img}`);
    setTimeout(function(){
        console.log("filtered image");
        fn("filtered image")
    } , 2000)
}
function step3(filter, fn){
    console.log(`pleasse wait i am adding caption to ${filter}`);
    setTimeout(function(){
        console.log("captioned image");
        fn("captioned image")
    } , 4000)
}
function step4(caption){
    console.log(`pleasse wait i am uploading the ${caption}`);
    setTimeout(function(){
        console.log("image uploaded");
    } , 3000)
}

step1( function(img){
    step2(img, function(filter){
        step3(filter , function(caption){
            step4(caption)
        })
    })
})











