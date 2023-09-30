// singleton
// Object.create() // using this we create singleton object // This is a constructor 

// object literals

const mySym = Symbol("key1")

const jsUser = {
name:"Hitesh",
"full name": "Hitesh Choudhary",
[mySym]: "key1",   // here we declear this key & value pair as symbol
age: 18,
location :"Jaipur",
email : "hitesh@google.com",
isLoggedIn: false,
lastLogInDays :["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);  // we can't access this value using . 
// console.log(jsUser[mySym]);   // using this we access symbol
// console.log(typeof jsUser[mySym]);

jsUser.email= "hitesh@chatgpt.com"

// Object.freeze(jsUser) // Prevents the modification of existing property attributes and values, and prevents the addition of new properties
jsUser.email= "hitesh@microsoft.com"
// console.log(jsUser.email);  // o/p => hitesh@chatgpt.com
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello jS User");
}

jsUser.greetingTwo = function () {
    console.log(`Hello jS User, ${this.name}`);
}

// console.log(jsUser.greeting);  // o/p => [Function (anonymous)]
console.log(jsUser.greeting());  // o/p => Hello jS User
console.log(jsUser.greetingTwo());  // o/p => Hello jS User


