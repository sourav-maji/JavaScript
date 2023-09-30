// date is calculated in milliseconds

let myDate = new Date()
// console.log(myDate);  // 2023-09-30T10:02:20.687Z
// console.log(myDate.toString());  // Sat Sep 30 2023 10:02:20 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  // Sat Sep 30 2023
// console.log(myDate.toISOString());  // 2023-09-30T10:02:20.687Z
// console.log(myDate.toJSON());  // 2023-09-30T10:02:20.687Z
// console.log(myDate.toLocaleDateString());  // 9/30/2023
// console.log(myDate.toLocaleString());  // 9/30/2023, 10:02:20 AM
// console.log(typeof myDate);  // object

let myCreatedDate= new Date(2023,0,23)   // Months start from 0 in js ; here january month will be considered
// console.log(myCreatedDate.toDateString());
let localDate= new Date(2023,1,8,5,3)
// console.log(localDate.toLocaleString());
// another way to declear date
let anotherDate = new Date("2023-01-14")
// console.log(anotherDate.toLocaleString());


let myTimeStamp= Date.now()
// console.log(myTimeStamp);  // this will return epoch time of now
// console.log(myCreatedDate.getTime());  // this will convert the date into epoch time
// console.log(Math.floor(Date.now()/1000))  // this will convert into seconds

let newDate= new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);  // here we use +1 because in js months starts from 0
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday:"long"
})