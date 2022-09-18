// random number generator 


// let's say i want random numbers between 0 to 5
/*
n = Math.random();
n = n*6;
n = Math.floor(n);
 */



// between 1 to 6
const randomNumber = Math.random();
let integerNumber = randomNumber*6;
integerNumber = Math.floor(integerNumber+1);
console.log(integerNumber);