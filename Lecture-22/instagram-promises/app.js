
// select image - 5s
let step1 = ()=>{
    console.log("please wait i am selecting image...");
    
    return new Promise( function(resolve,reject){
        setTimeout(function(){
            resolve("Selected Image")
        } , 5000)
    } )
}

// add filter
let step2 = (image)=>{
    console.log(`please wait i am adding filter to ${image}...`);

    return new Promise( function(resolve,reject){
        setTimeout(function(){
            resolve("Filtered Image")
        } , 2000)
    } )
}
// add caption
let step3 = (filter)=>{
    console.log(`please wait i am adding caption to ${filter}...`);

    return new Promise( function(resolve,reject){
        setTimeout(function(){
            resolve("Captioned Image")
        } , 4000)
    } )
}
// finally uplaod
let step4 = (caption)=>{
    console.log(`please wait i am uploading the ${caption}...`);

    return new Promise( function(resolve,reject){
        setTimeout(function(){
            resolve("Image Uploaded")
        } , 3000)
    } )
}

step1()
.then(function(image){
    console.log(image);
    return step2(image)
})
.then(function(filter){
    console.log(filter);
    return step3(filter)
})
.then(function(caption){
    console.log(caption);
    return step4(caption)
})
.then(function(upload){
    console.log(upload);
})
.catch(function(err){
    console.log(err);
})
















