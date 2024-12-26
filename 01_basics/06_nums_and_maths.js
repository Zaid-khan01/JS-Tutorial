const score = 400

const balance = new Number(200)
console.log(balance);
console.log(score);

console.log(balance.toString());    // converts number to string
console.log(balance.toString().length);   //first convert to string and then find length
console.log(balance.toFixed(2));    // convert to fixed point decimal value 

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));     // converts number into indian standard


// +++++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math.abs(-4));  // -ve becomes +ve, but +ve cannot becomes -ve
console.log(Math.round(4.3));   // round off the number, and gives the floor value
console.log(Math.ceil(4.3));   // round off the number, and gives the ceiling value
console.log(Math.min(4, 3, 6, 8));   // give the smallest value 
console.log(Math.max(4, 3, 6, 8));   // give the largest value

console.log(Math.random());     // gives different values every time b/w 0 to 1
console.log((Math.random()*10) + 1);      // it determines that value cannnot be 0, always greater than 0

// General formula
const min = 5
const max = 10
console.log(Math.floor(Math.random()*(max-min+1))+min)
