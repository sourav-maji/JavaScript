const coding = [ "js", "java", "ruby","python", "cpp" ]

// coding.forEach( function ( val ) {
//         console.log(val);
// } )

// Using Arrow function

// coding.forEach ( (item)=>{
//     console.log(item);
// } )

// Passing a function reference 

function printMe(item) {
    // console.log(item);
}

coding.forEach ( printMe )  // We have to give the reference of the function ; we don't have to execute the function here

coding.forEach((item , index , arr) =>{
    // console.log(item , index , arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach ( (item)=>{
    console.log(item.languageName);
} )
