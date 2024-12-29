let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(typeof myDate);

const myCreatedDate = new Date(2005, 11, 23)    // LOL, it's my DOB
console.log(myCreatedDate.toDateString());   // Months start from 0, when we using array that's why it prints 'Dec' at 11

const myCreatedDate2 = new Date("1-1-2024");
console.log(myCreatedDate2.toLocaleDateString());

let timeStamp = Date.now()  // for printing time stamp, we use this method
console.log(timeStamp);     // this timestamp is a milli second value 
// the real life application of timestamp is to compare two times of different dates in big projects

console.log(myCreatedDate.getTime());   // gives time stamp of this particular date
// if we want to print time stamp in seconds then - 

console.log(Date.now()) // current time stamp in milli seconds
console.log(Math.floor(Date.now()/1000));   // current time stamp in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());    // current month is december, but in JS month starts from '0' 
// that's why it prints 11

console.log(newDate.getDay());  // today is Sunday that's why it display '0'

// We can customize the locale string method by one more interesting concept
console.log(newDate.toLocaleString('default', {
    weekday: 'long', // basically by this method, we can customize our date according to us, like to print
    // time stamp, weekdays, calendar etc., even we can customize in long, narrow, etc. by this loacale string method 
}))