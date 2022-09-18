//object variable

const objectVariable = {fruit1 : 'mango',sweetness: 300};
console.log(objectVariable);
// console.log(typeof(objectVariable));
// accessing objects in the object variable

console.log(objectVariable.fruit1);


const nestedObject = {
    layer1:{
        layer2:{
            layer3:{
                target : 202
            }
        }
    }
};

console.log(nestedObject.layer1.layer2.layer3.target);


// 2nd method of accessing object values 
console.log(objectVariable['sweetness']);