const userEmail = "h@hitesh.ai"

// if ( userEmail ){
//     console.log("Got the User Email");
// }else{
//     console.log("Don't have the User Email");
// }

// falsy values

// false, 0, -0,BigInt 0n, "", null , undefined , NaN

// truthy values

// "0", 'false'," ", [],{}, function (){}

// To check a array is empty or not
// const myArray = []
// if(myArray.length ===0){
//     console.log("array is empty");
// }

// To check a Object is empty or not

// const myObject = {}
// if (Object.keys(myObject).length === 0){  // Object.keys(myObject) returns the array of all the keys present in myObject
//     console.log("Object is empty");
// }

// IMP for Interview
// console.log(false == 0);  // o/p=> true
// console.log(false == "");  // o/p=> true
// console.log(0 == "");  // o/p=> true


// Nullish Coalescing Operator ( ?? ) : null , undefined

let val1;
// val1 = 5 ?? 10   // 5 will be assigned
// val1 = null ?? 10    // 10 will be assigned
// val1 = undefined ?? 15   // 15 will be assigned
val1 = undefined ?? 15 ?? 20  // 15 will be assigned

console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice =100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;