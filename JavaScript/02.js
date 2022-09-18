// var variable_name = value;    ->syntax

// using var you can update the value of the variable

// using const you can not redelcare or reassign your variable a value

//using let we can declare a variable whenever we want to and assgin/reassign afterwards

let counter = 0;

counter++;
// same as
// counter = counter + 1;

console.log(counter);

// use const ->when we don't want to change the value of the variable of in the program 

/*difference between let and var for declaring variable:

let =>block scoped not a global scoped
var =>global scoped 

var=>can be redeclared into the scope
let=>cannot be redeclared in the scope

let=>cannot be accessed without initialization
var=>can be accessed without initialization (default=undefined)

*/