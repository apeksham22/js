//  Primitive

// 7 types: String, Number, Boolean, undefined, null, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga'];
let myObj = {
    name: "apeksha",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

