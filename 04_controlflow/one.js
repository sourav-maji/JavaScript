const isUserloggedIn = true
const temprature = 41

// if( 2 == "2" ){
//     console.log("Executed..");
// }
// if( 2 === "2" ){
//     console.log("Type Executed..");
// }
// > , < ,<= ,>=,!=,==, ===

// if ( temprature < 50 ){
//     console.log("temperature is less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }
// console.log("Executed...");


// const score = 200
// if(score > 100 ){
//     const power = "fly"
//     console.log(`User has : ${power}`);
// }
// console.log(`User has : ${power}`);

// const balance = 1000

// if(balance > 500 ) console.log("test 1") , console.log("test2"); // implicit block scope // we can write multiple line of code inside the block using ,

// if( balance < 500 ){
//     console.log("less than 500");
// }else if(balance < 750 ){
//     console.log("less than 750");
// }else if (balance < 900 ){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const logggedInFromEmail = true

if( userLoggedIn && debitCard ){
    console.log("Allow to buy courses");
}

if ( loggedInFromGoogle || logggedInFromEmail ){
    console.log("User logged in");
}