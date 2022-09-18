// FizzBuzz problem    

/*
let arr = [];
arr.push(1);//adds element to the last index
console.log(arr);
arr.pop();//removes the last element
*/

let arr = []
let index = 0;
let cnt = 1;
function fizzBuzz(){

    if ((index + 1) % 3 == 0 && (index + 1) % 5 == 0) {
        arr.push("FizzBuzz");
    }
    else if ((index + 1) % 3 == 0) {
        arr.push("Fizz");
    }
    else if ((index + 1) % 5 == 0) {
        arr.push("Buzz");
    }
    else {
        arr.push(cnt);
    }
    index++;
    cnt++;
}

for(let i =0;i<20;i++){
    fizzBuzz();
}

console.log(arr);