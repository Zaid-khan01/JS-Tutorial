const heroes = ["thor", "ironman", "spiderman"]
const heroes2 = ["salman", "shahrukh", "aamir"]

heroes.push(heroes2)    // it doesn't push elements in the array, instead it directly push whole array into this
console.log(heroes) // we don't want to push the whole array, we just want to push the elements of array 

// if we want to print elements of both array together then we can use 'concat' method
const allHeroes = heroes.concat(heroes2)
console.log(allHeroes);

// the more efficient way of doing this is - 'spread'
const all_newHeroes = [...heroes, ...heroes2]
console.log(all_newHeroes);

const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  // in this we have array under array, if we want to
// access all elements together then we can use 'flat' method

const newArr2 = newArr.flat(Infinity)   // depth of array
console.log(newArr2);


console.log(Array.isArray("Zaid")); // checks that it is array or not
console.log(Array.from("Zaid")) // converts into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))   // returns a new array after concatenating these elements