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
        let err = true    
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
}).finally( () => console.log("This Promise is either resolved or rejected"))


const promiseFive = new Promise( function(resolve,reject){
    setTimeout( function(){
        let err = false    
        //  true
        if (!err){
            resolve({userName:"JavaScript", password :"1234"})
        }else{
                reject("ERROR : JavaScript Something went wrong")
        }
    }, 1000)   
})


async function consumePromiseFive(){
  try{
    const response =  await promiseFive
  console.log(response);
  } catch(error){
    console.log(error);
  }
}


async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data);
    } catch(error){
        console.log("ER : ",error);
    }
}

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then( (response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch( (error)=>{
    console.log(error);
})


