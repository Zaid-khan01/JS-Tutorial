// comparison of same data types

console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);


// for different data types, it is not permissible
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);  // false
console.log(null == 0);  // false 
console.log(null >= 0);  //true, it is true because equality check == and comparisions work differently.

console.log(undefined == 0);  // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

console.log("2" == 2);  // true, because double equality only checks the number
console.log("2" === 2);  //false, because triple equality or strict check also checks the data type

