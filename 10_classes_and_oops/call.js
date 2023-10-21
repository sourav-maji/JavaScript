function SetUsername(username) {
    // Complex DB calls
    this.username =  username
    console.log("called");
}

function createUser(username, email , password) {
    SetUsername.call(this, username)  // we have to pass this so that the variable can set in the this context
    
    this.email = email
    this.password = password
    
}

const chai = new createUser("chai" , "chai@fb.com", "123")
console.log(chai);