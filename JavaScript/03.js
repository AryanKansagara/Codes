const oneVariable = 20;//number
const twoVariable = "This is a string";//string
const variable3 = oneVariable + twoVariable;
const variable4 = false;//boolean

console.log(variable3);

// in js we dont need to specify the type of variable

console.log(typeof(oneVariable));//typeof is inbuilt function to get the datatype 
console.log(typeof(twoVariable));

// coercing:
const num1 = '10';
const num2 = 20;
const res = num1 + num2;//ouput = 1020 =>both are coerced and we get some output

const ans = Number(num1)+ num2;//ouput = 30 


//arrays

const firstArray = [10,20,30,40];

console.log(firstArray[2]);//access element at the specified index

const array2 = [10,"Hello world",{prop: 'hunt'},[1,2]];//an array can have more than one type of containers i.e. of different datatypes

console.log(array2[3][0]);//output = 1 in the array inside array 

