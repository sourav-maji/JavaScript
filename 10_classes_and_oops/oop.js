const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,


    getUserDetails : function(){
        // console.log("Got User details from database");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
    }
}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLiggedIn = isLoggedIn

    this.greeting =  function ( ){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
const userThree = new User ("Sourav", 15, true)   
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);

// Using new keyword we create a new instance . new object


