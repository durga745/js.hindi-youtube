// # Primitive Datatypes

// 7 types : String, Number, Boolean, Null, underfined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 343436376353542525255256262n

// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Durga",
    age: 23
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);