let score = "33"

console.log(typeof score); // string
// but we want this score in number, we convert this in number

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber);

// if score = "33abc", it gives NaN(Not a Number) after converting in integer
// if score = null, it gives 0 after converting in integer
// if score = undefined, it gives NaN(Not a Number) after converting in integer
// in boolean, true => 1, false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
