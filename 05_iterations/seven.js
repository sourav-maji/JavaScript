const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num)=>{
//     return num+10;
// } )

// Short hand syntax
// const newNums = myNumbers.map( (num)=>num+10 )
// console.log(newNums);

// method channing

const newNums = myNumbers
                .map( (num)=> num*10)
                .map( ( num)=> num+1)  // the input for this map will be the newly evalueated array created from previos map
                .filter( (item )=> item >40)
console.log(newNums);