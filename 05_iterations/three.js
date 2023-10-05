// for of loop
// ["","",""]
// [{},{},{}]

// for (const iterator of object) {
    
// }
const arr = [1,2,3,4,5]
for ( const num of arr){
    // console.log(num);
}

const greetings = "hello world!!"
for(const greet of greetings){
    if(greet==" "){
        continue;
    }
    // console.log(`Each char is : ${greet}`);
}

// Maps

const myMap = new Map()
myMap.set("IN","India")
myMap.set("USA","United State of America")
myMap.set("FR","France")
myMap.set("BR","Brazil")


console.log(myMap.get("IN"))

for(const i of myMap){
    console.log(i);
}

console.log("Map is : ", myMap);