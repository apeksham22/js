//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 //typeof score = number
const scoreValue = 100.3 //typeof scoreValue = number

const isLoggedIn = false //typeof isLoggedIn = boolean
const outsideTemp = null //typeof outsideTemp = object
let userEmail; //typeof userEmail = undefined

const id = Symbol('123')        //typeof id = symbol
const anotherId = Symbol('123') //typeof anotherId = symbol

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n //typeof bigNumber = undefined



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //typeof heros = object
let myObj = {                          //typeof myObj = object
    name: "hitesh",
    age: 22,
}

const MyFunction = function(){            //typeof MyFunction = function
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof anotherId);
