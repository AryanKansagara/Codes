// How to mutate the values in an array using map function and callback function

// Callback function and its reusability

const myArray = [1,2,3,4];

function timesTwoCallbackFunction(element){
    return element*2;
}

// arrayName.map(callbackFunction)

const newArray = myArray.map(timesTwoCallbackFunction);

console.log(newArray);

// the main reason for the existence of map function 

console.log(newArray.map(element => element*10));

// so basically once a callback function is defined we can reuse it enumerable times in our code using .map() function and arrow syntax to just redefine it 

