// const tinderUser = new Object()
const tinderUser = {} // no difference b/w two
tinderUser.id= "123abc"
tinderUser.name= "Sammy"
tinderUser.isLoggedIn= false

// console.log(tinderUser);   // o/p => { id: '123abc', name: 'Sammy', isLoggedIn: false }
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname : "choudhary"
        }
    }
}

// console.log(regularUser.fullname); // o/p => { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }

// console.log(regularUser.fullname.userfullname.firstname); // o/p => hitesh
// console.log(regularUser.fullname?.userfullname.firstname); // this is called optional chaining ; we make this using ?

const obj1= {1:'a', 2: 'b'}
const obj2= {3:'a', 4: 'b'}
// const obj3 = {obj1,obj2}
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign({}, obj1,obj2) // Copy the values of all of the enumerable own properties from one or more source objects to a target object. 
// console.log(obj4); // o/p => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1,...obj2} // this is using spread operator
// console.log(obj5);  // o/p => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users= [
    {
        id:1,
        email: "h@gmail.com"
    }, 
    {
        id:2,
        email: "h2@gmail.com"
    },
    {
        id:3,
        email: "h3@gmail.com"
    },
    {
        id:4,
        email: "h4@gmail.com"
    }
]

// console.log(users[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));  //Returns all the keys of the objcet as an array
// o/p => [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));  // //Returns all the values of the objcet as an array   // o/p => [ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));  // this will return all the keys and values as array of objects // o/p => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // we use hasOwnProperty to check that the Object has the specified key or not. // o/p => true
