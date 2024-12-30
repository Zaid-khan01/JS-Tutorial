// object literals
const user = {
    name: "Zaid",
    age: 20,
    email: "zaid@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Wednesday", "Friday"]
}   // in the object creation we use keys with values, ex - name, age, email are keys with some values

// console.log(user)   // prints all keys
// // if we want to print any specific key then just call it by dot operator
// console.log(user.name)
// console.log(user.lastLoginDays)


// // We can also access elements of objects in another way
// // As we know that keys are stored as a string in js, hence we pass keys as string
// console.log(user["email"])   // by this we can access the value of key named as 'email'

// user.email = "zaidkhan@gmail.com"   // update the value
// Object.freeze(user) // it means now value cannot be changed, object is freezed
// user.email = "hello@gmail.com"  // this value cannot be updated because we already freeze the object 

// console.log(user)

user.greeting = function(){
    console.log("Hello JS user");
}

user.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`)  // as we learn at the 01_basics, in this we can pass any keys
}

console.log(user.greeting())
console.log(user.greeting2())

// imp thing, we should have to use dot operator to access elements of object, brackets can use in special case