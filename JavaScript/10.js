// functions

/*
// declaring a function
function function_name(parameters){
    // statement
}
// calling/invoking/executing a function
function_name()


*/

function hello(){
    console.log("hello world");
}

hello();

// ------------------------------------------

// declaring and calling a function in the same step 
//immediately invoked function

(function anotherFunction(){
    console.log("this is a immediately invoked function");
})();


// -----------------------------------

function myFunction(param1,param2){
    console.log(param1);
    console.log(param2);
}

myFunction("Aryan",20);

// declaring a function and assigning to a variable(anonymous function)
const secondFunction = function (){
    console.log("something");
}
secondFunction();
console.log(typeof(secondFunction));//ouput = function

// anonymous function cant stand alone but with a variable it works

// ---------------------------------

// Arrow Function (another type of syntax)
// can't stand alone it should be assigned
const arrowFunction = () =>{
    console.log("This is an arrow function");
}

arrowFunction();