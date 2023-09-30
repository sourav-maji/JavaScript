
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName // this is called reference of the function
// sayMyName() // this is called execution of the function

// function addTwoNumbers( number1, number2 ){
//     console.log(number1 + number2)
// }
function addTwoNumbers( number1, number2 ){
    return (number1 + number2)
}


const result = addTwoNumbers(4,6)
// console.log("Result : ", result);

// function logInUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a user name")
//         return
//     }
//     return (`${username} just logged in`)
// }

// function logInUserMessage(username){
//     if(!username){ // undefined return false value
//         console.log("Please enter a user name")
//         return
//     }
//     return (`${username} just logged in`)
// }

function logInUserMessage(username ="sam"){ // here we passed default value so that it doesn't give undefined
    return (`${username} just logged in`)
}

console.log(logInUserMessage("Hitesh"))  // if we do't pass anything then in function value will be undefined