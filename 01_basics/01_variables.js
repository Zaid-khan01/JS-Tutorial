const accountId = 14453
let accountEmail = "zaidkhan@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"   // not a good approach to declare like this

// We cannot change constant that's why it gives error
// accountId = 2
// console.log(accountId);

accountEmail = "zk@gmail.com"
accountPassword = "121212"
accountCity = "Ranchi"

// Printing each element at different lines
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// Printing each element at one line
console.table([accountId, accountEmail, accountPassword, accountCity]);

// Major difference b/w 'let' and 'var' is 'let' used within scope, while 'var' used within block