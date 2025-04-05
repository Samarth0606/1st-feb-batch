

// let arr = [10,20,30,40,50]

// push (last)
// arr.push(60)
// let newlength = arr.push(60,70,80)
// console.log(arr);
// console.log(newlength);

// -------------------------------------

//pop (last)

// let removedElement = arr.pop()
// console.log(arr);
// console.log(removedElement);

// -------------------------------------

// unshift(start) -> adding

// let newlength = arr.unshift("samarth" , "vohra")
// console.log(arr);
// console.log(newlength);

// -------------------------------------
// shift(start) -> removing

// let removedElement = arr.shift()
// console.log(arr);
// console.log(removedElement);


// -----------------------------------------------------------
// concat - ND

// let arr = [10,20,30,40,50]
// let arr2 = [80,90]

// let returnedArr = arr.concat(arr2)
// console.log(arr);
// console.log(returnedArr);

// -------------------------------------


// flat (flattening an array) -> ND

// let arr = [10,20, [ 30, [40] ] ,50]


// let newFlat1 = arr.flat()

// let newFlat2 = newFlat1.flat()

// console.log(arr);
// console.log(newFlat1);
// console.log(newFlat2);

// -------------------------------------

//join - ND
// let arr = [10,20, 30, 40 ,50]

// let newArr = arr.join("_") 
// console.log(arr);
// console.log(newArr);
// // console.log(typeof(newArr));

// -------------------------------------
// slice - ND
// let arr = [10,20,30,40,50,60,70,80,90]

// let slicedArr = arr.slice(4);
// let slicedArr = arr.slice(4,6); //ending indexes are not incliuded

// console.log(arr);
// console.log(slicedArr);

// -------------------------------------

//splice - D
// let arr = [10,20,30,40,50,60,70,80,90]

// // let newarr = arr.splice(2)
// // let newarr = arr.splice(2,4) //length
// // let newarr = arr.splice(2,4,"samarth" , "vohra") //add anywhere you want
// let newarr = arr.splice(2,0,"samarth" , "vohra") 
// console.log(arr);
// console.log(newarr);

// -------------------------------------
//sort - D

// let arr = [60,70,10,20,30,80, 40,50, 90]

// let newArr = arr.sort()

// console.log(arr);
// console.log(newArr);


// -------------------------------------
//indexOf - ND

// let arr = [60,70,10,20,30,80, 40,50, 90]

// let ind = arr.indexOf(80)
// console.log(ind);
