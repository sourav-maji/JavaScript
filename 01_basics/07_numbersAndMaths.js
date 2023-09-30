const score = 400
// console.log(score);
const balance = new Number(100)  // here we explicitly declear the Number data type
// console.log(balance);
// console.log(balance.toString(), balance.toString().length);
// console.log(balance.toFixed(2));  //Number of digits after the decimal point

const anotherNumber = 123.8965
// console.log(anotherNumber.toPrecision(3));  //priority will be given to the number before decimal point

const hundreds= 1000000
// console.log(hundreds.toLocaleString());  //1,000,000
// console.log(hundreds.toLocaleString('en-IN'));  //10,00,000


// +++++++++++++ Maths +++++++++

console.log(Math);
// console.log(Math.abs(-4)); // this will return absoulate value i.e positive value only
// console.log(Math.round(4.3)); // this will return round value i.e integer value only
// console.log(Math.ceil(4.3)); // this will return ceilling value i.e upper integer value 
// console.log(Math.floor(4.3)); // this will return floor value i.e a integer value 
// console.log(Math.sqrt(144)); // this will return square root of the number
// console.log(Math.min(4,3,5,1)); // this will return minimum number
// console.log(Math.max(4,3,5,1)); // this will return minimum number

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min= 10
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min)