const promiseOne = new Promise( function(resolve,reject) {
    // Do an async task
    // DB calls, cryptography , network calls

    setTimeout(function(){
        console.log("Async Task is Complete");
        resolve()
    },1000)
} )


promiseOne.then( function (){
    console.log("Promise Consumed");
})


new Promise(function (resolve , reject){
    setTimeout( function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then( function (){
    console.log("Promise Consumed 2");
})


const promiseThree = new Promise(function (resolve , reject){
        setTimeout(function ( ){
                resolve({userName : "Chai", email : "chai@chaiaurcode.com"})
        } ,1000)
})

promiseThree.then( function (user ) {
        console.log(user);
})

const promiseFour =  new Promise( function (resolve, reject) {
    setTimeout( function(){
        let err = false    
        //  true
        if (!err){
            resolve({userName:"Sourav", password :"1234"})
        }else{
                reject("ERROR : Something went wrong")
        }
    }, 1000)    
})


promiseFour.then( (user)=>{
    console.log(user);
    return user.username
}).then( (username)=>{
        console.log(username);
}).catch(function(error){
    console.log(error);
})

