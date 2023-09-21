// Primitive data type  or call by value data type
// 7 types :- String,Number,Boolean, null,undefined,Symbol,BigInt

const score =100
const scoreValue =100.3
const isLoggedIn= false
const outsideTemp= null
let userEmail;   // the initial value will be undefined
const id = Symbol("123")
const anotherId= Symbol("123")
console.log(id,anotherId,id===anotherId);
const bigNumber = 34526266262676775n

console.log(typeof bigNumber);
console.log(typeof isLoggedIn);
console.log(typeof scoreValue);

// the value of id and anotherId is not same i.e the usage of Symbol

// Non-Primitive data type  or reference data type
// Array, Objects, Functions

const heroes = ["Saktiman","naagraj","doga"]
let myObj= {
    name:"Hitesh",
    age:22
}

const myFunction = function () {
    console.log("Hello World !!");
}

console.log(heroes,typeof heroes);
console.log(myObj,typeof myObj);
console.log(myFunction,typeof myFunction);

// JavaScript is a dynamically typed language i.e the type of the variable is decide in run time

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (primitive data type use this type of memory), Heap (non primitive data type use this type of memory)
// Stack means we get a copy of the variable
// Heap means we get the reference of the variable means if we change it then original value will get changed

let myYoutubeName= "hiteshchoudharydotcom"
let anotherName= myYoutubeName
anotherName="chaiaurcode"
console.table([myYoutubeName, anotherName])

let userOne={
    emailId:"user@google.com",
    upi:"user@ybl"
}

let userTwo= userOne
userTwo.emailId="hitesh@google.com"
console.table([userOne,userTwo])
console.table([userOne.emailId,userTwo.emailId])

