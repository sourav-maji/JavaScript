// var c = 300;
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Innee : ", a);  // o/p=> 10

}

// console.log(a); // o/p => 300
// console.log(b);
// console.log(c);  // o/p => 30

// Note : we need to avoid to use var keyword

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website); // o/p => hitesh youtube
    }
    // console.log(website); // o/p => error
}
// console.log(username);  // o/p => error

// +++++++++++++ Interesting+++++++++++++++

console.log(addone(5));

function addone(num) {
    return num+1
}

// console.log(addTwo(5));  // this will give an error // this is due to hosting
const addTwo = function (num) {  //some time we call this thing expression 
    return num+2
}
addTwo(5)