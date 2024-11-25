// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100  // Number
const scoreValue = 100.3  // Number

const isLoggedIn = false  // Boolean
const outsideTemp = null  // Null
let userEmail;  // Undefined

const id = Symbol('123')  // Symbol, it is unique 
const anotherId = Symbol('123')  // Symbol, it is unique
console.log(id == anotherId)  // false, because both are symbol and symbols are unique in nature if eihter they contain same data

const bigNumber = 23453425451345n  // BigInt, we add 'n' at the end to directly declare a large number as an big integer



// Reference / Non Primitive

// Array, Functions, Objects

// Declaration of Arrays
const heroes = ["Superman", "Spiderman", "Ironman"]  // contains elements in the square brackets

// Declaration of Objects
let object = {  // contains elements in the curly brackets
    name : "Zaid",
    age : 20,
    email : "zaidkhan@gmail.com"
}

// Declaration of Function
const myFunction = function(){
    console.log("Hello Zaid")
}