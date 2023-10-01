const user = {
    username: "hitesh",
    price : "999",
    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);   // this called about the current context
    }
}
// user.welcomeMessage()  // o/p => hitesh , welcome to website
user.username = "sam"
// user.welcomeMessage()  // o/p => sam , welcome to website

// console.log(this);  // o/p => {} // as we're in node env the context refer to a global context which is empty in this case


// function chai() {
//     let username = "hitesh"
//     // console.log(this);  // this will print a lot of things
//     // console.log(this.username);   // o/p => undefined  // we can't use this inside a function ; we can only use this with object
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  // o/p => undefined
// }

// Arrow Function declearition

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);  // o/p => undefined
// }
 
// chai()

// const addTwo= ( num1, num2) => {
//     return num1 + num2
// }

// Implicit return : Arrow function   ; one line statement

// const addTwo = ( num1 , num2 ) =>  num1 + num2
// const addTwo = ( num1 , num2 ) =>  ( num1 + num2 ) // if we wrap this value inside () then we don't need to write return keyword , incase of { } we need to write return keyword
const addTwo = ( num1 , num2 ) =>  ({ username : "hitesh"}) // to return a object in implicit return we have to use ( )
// o/p => { username: 'hitesh' }

console.log(addTwo(4,6));