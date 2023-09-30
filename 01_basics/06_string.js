const name= "hitesh"
const repoCount= 50

// console.log(name+repoCount + " Value");    // this is old syntax ; this is not preferable


// Using string interpolation syntax is most peferable  . Here we name placeholders and we replace varible inside placeholders
console.log(`Hello , my name is ${name} and my repo count is ${repoCount}`);

// Another syntax to declear a String

const gameName= new String("hitesh-hc-hd")    
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  // this will return the char present at the given index
console.log(gameName.indexOf("t"));  // this will return the index of the given char

const newString = gameName.substring(0,4) // the indexing start from 0 and the end value will be excluded
console.log(newString);
// Note : we can't give negative value inside the subString function ; if we give negative value then this will ignore negative value and start from 0

const anotherString= gameName.slice(-9,4)  // we can give negative value inside slice()
console.log(anotherString);

const newStringOne= "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); // The trim() method removes whitespace from both sides of a string
console.log(newStringOne.trimEnd());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')); // replace inside the string
console.log(url.includes("sundar")); // this will check the given sub-string is present inside the string or not

console.log(gameName.split("-"));