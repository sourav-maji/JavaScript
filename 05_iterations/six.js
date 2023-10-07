const coding = [ "js", "java", "ruby","python", "cpp" ]

// const values = coding.forEach ( (item) => {
//         console.log(item);
//         // return item
// })

// console.log(`Values : ${values}`);   // O/P => undeifed as forEach loop returns nothing

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num >4)
// console.log(newNums);   // O/P => [ 5, 6, 7, 8, 9, 10 ]


const newNums = myNums.filter ( (num)=>{
    return num>4    // If we use this syntax we have the use return keyword
})