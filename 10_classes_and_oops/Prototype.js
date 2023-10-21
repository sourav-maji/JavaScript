let myName = "hitesh     "
let myChannel = "chai    "

// console.log(myName.length);
// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh  = function () {
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says Hello`);
    
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()


// Inheritance

const User = {
    name :"chai",
    email : "chai@google.com"
}

const Teacher = {
    makeVideo : true

}

const  TeachingSupport = {
    isAvailable : false

}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "
String.prototype.trueLenght = function () {
        console.log(`${this}`);
        console.log(`True Lenght is  : ${this.trim().length}`);

}

anotherUsername.trueLenght()
"hitesh".trueLenght()
"iceTea".trueLenght()