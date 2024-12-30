const arr = [0, 1, 2, 3, 4, 5]
console.log(arr);   // prints all elements
console.log(arr[2])   // prints element of 2nd index or 3rd position

// +++++++++++++++++++ Array methods +++++++++++++++++++

arr.push(6) // push element in array at end   
console.log(arr);   
console.log(arr.pop())  // pop element from array from end

arr.unshift(9)  // add element at the beginning of array
console.log(arr);

arr.shift() // remove element from beginning
console.log(arr);

console.log(arr.includes(9));   // checks that element is present or not in array
console.log(arr.indexOf(2)) // print index of element
console.log(arr.indexOf(9)) // if element is not present, then print -1


const newArr = arr.join()

console.log(arr)    // normal array
console.log(newArr) // join array then convert into string
console.log(typeof newArr)


// slice, splice

console.log("A", arr);  // this is our original array named as 'A'

const myArr = arr.slice(1,3)    // if we use slice method then it cannot manipulate the origianl array
console.log(myArr); // it prints element from first limit to (last limit-1)
console.log("B", arr);  // original array was not manipulated


const myArr2 = arr.splice(1,3)  // if we use splice method then it manipulates the original array 
// it basically cuts that portion of limit from original array
console.log(myArr2) // this portion is cut from original array
console.log("C", arr);  // original array is manipulated