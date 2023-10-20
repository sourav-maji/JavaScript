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