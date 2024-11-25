const name = "Zaid Khan"
const repoCount = 50

console.log(name + repoCount);  // This syntax is outdated, now we have new feature in js

// Backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // This is a professional way

// Another declaration of String
const anotherName = new String("Zaid khan")
console.log(anotherName);  // It basically stores that input string as an array index
console.log(anotherName[0]);  // prints 'Z'

// Let's see some inbuilt prototype of js which have specific fucntionality

console.log(anotherName.length);  // for finding length of string
console.log(anotherName.toUpperCase());  // prints string in uppercase
console.log(anotherName.charAt(5));  // prints character at specific index
console.log(anotherName.indexOf('d'))  // prints index of specific character

const newName = name.substring(0,4)  // prints string from index 0 to index 3, only +ve index allowed
console.log(newName);

const anotherString = name.slice(-8,4)  // it works same as substring, different is only that we can give -ve index also

const newStringOne = "   Zaid   "  // if we want to remove these extra spaces then we use 'trim'
console.log(newStringOne);
console.log(newStringOne.trim());  // Remove extra white space

const url = "https://zaid.com/zaid%20khan"  // if we want to change anything in this URl then we use replace

console.log(url.replace('%20', '-'))  // Replace %20 by '-'

console.log(url.includes('zaid'));  // Gives 'true' if url contains this string otherwise false
console.log(url.includes('hello'));

