//comparison operator 

// #1 => '===' 

// this sign compares if both rhs and lhs are same in value and datatype

const res = 20 === 20;
console.log(res);


// #2 => '!==' opposite to '==='
// compares if both value and type are equal
console.log(20!=='20')//output = true

// #3 => '=='
// it just compares the value and not the datatype 
console.log(20=='20');//output = true
console.log(20==='20');//output = false


// #4 => '!=' opposite to '=='
// compares the value
console.log(20!='20')//output = false



// arrays with '===' and '=='
// we cannot compare arrays with these comparison operators and we would have to use libraries

const array1 = [1,2,3,4];
const array2 = [1,2,3,4];
console.log(array1===array2);//output = false
console.log(array1==array2);//output = false


// shortform in js 
const result = 21 === 21? 'both are same' : 'both are different';
console.log(result);