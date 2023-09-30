// Array
const myArray=[0,1,2,3,4,5]
console.log(myArray[0]); // indexing of array starts from 0
const heroes= ["saktiman","naagraj"]
const myArray2= new Array(1,2,3,4)

// Array Methods
// myArray.push(6) //Appends new elements to the end of the array
// myArray.push(7)
// myArray.pop() //Removes the last element from the array
myArray.unshift(9)  //Inserts new elements at the start of an array
myArray.shift()  // Removes the first element from an array
// console.log(myArray);

// console.log(myArray.includes(9));  // Determines whether an array includes a certain element
// console.log(myArray.indexOf(9));  // Returns the index of the first occurrence of a value in an array, or -1 if it is not present

const newArr= myArray.join() ;  //Adds all the elements of an array into a string
// console.log(newArr); // o/p => 0,1,2,3,4,5

// slice and splice
console.log("A", myArray);  // o/p=> A [ 0, 1, 2, 3, 4, 5 ]
const myn1= myArray.slice(1,3)  
console.log(myn1);  // o/p => [ 1, 2 ]
console.log("B", myArray) // o/p=> B [ 0, 1, 2, 3, 4, 5 ]
const myn2= myArray.splice(1,3); //Removes elements from the orginal array and return the removed element as an array  // o/p => [ 1, 2, 3 ]
console.log(myn2); // o/p => [1, 2, 3]
console.log("B", myArray) // o/p=> C [ 0, 4, 5 ]
