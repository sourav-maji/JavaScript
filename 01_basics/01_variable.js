const accountId= 144553;
let accountEmail= "hitesh@google.com"
var accountPassword ="12345"
accountCity="Jaipur";
let accountState;

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


// accountId=2  //Not allowed

accountEmail="choudhary@google.com";
accountPassword="21212121";
accountCity="Bengaluru";
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])