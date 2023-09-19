// let score =33
// console.log(typeof score);
// console.log(typeof (score));  // here typeof used as a method


// let newScore="44abc"
// console.log(typeof newScore);
// let valueInNumber = Number(newScore)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// let newScore1=null
// console.log(typeof newScore1);  // object
// let valueInNumber1 = Number(newScore1)
// console.log(valueInNumber1); // this will give output 0
// console.log(typeof valueInNumber); // number

// let newScore2=undefined
// console.log(typeof newScore2); // undefined
// let valueInNumber2 = Number(newScore2)
// console.log(valueInNumber2); // NaN
// console.log(typeof valueInNumber2); // number

// // "33" => 33
// // "33abc" => NaN
// // true => 1
// // false => 0
// // undefined => NaN
// // null => 0

// let isLoggedIn= 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// // 1=> true ;0=> false
// // "" => false ;
// //"abc" => true

// let someNumber=55;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******** Operations *********

let value =3
let negValue= -value
console.log(negValue);
// console.log(2/3);
// console.log(2%3);

let str1="hello"
let str2=" hitesh"
let str3= str1+ str2; // String concatination
console.log(str3);

console.log("1"+2); // 12
console.log(1+ "2"); //12
console.log("1"+2+2); //122
console.log(1+2 +"2"); // 32

// Tricky conversion
console.log(+true);  // this will give output 1 
// console.log(true+);  // this will give error
console.log(+"");  // this will give 0\

let num1,num2,num3

num1=num2=num3=2+2;
console.table([num1,num2,num3])
console.log(+"10");

// Postfix and Prefix operator
let gameScore=132;
gameScore++;
console.log(gameScore);