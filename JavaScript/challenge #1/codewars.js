// function getCount(str) {
//     // a,e,i,o,u =>vowels 
//     let strings = str.split("");
//     let cnt1 = count(strings,'a');          
//     let cnt2 = count(strings,'e');          
//     let cnt3 = count(strings,'i');          
//     let cnt4 = count(strings,'i');          
//     let cnt5 = count(strings,'u');          
//     return cnt1+cnt2+cnt3+cnt4+cnt5;
// }

// function count(arr,char){
//     let cnt =0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==char){
//             cnt++;
//         }
//     }
//     return cnt;
// }

// console.log(getCount("o a kak ushakov lil vo kashu kakao"));

// const vowels = ['a','e','i','o','u'];
// function getCount(str){
//     let cnt =0;
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             cnt++;
//         }
//     }
//     return cnt;
// }
// console.log(getCount("abracadabra"));

// function isDivisible(n,x,y) {
//     if(n%x==0 && n%y==0){
//         return true;
//     }
//     return false;
// }

// function makeNegative(num) {
//     if(num>0){
//         return num*(-1);
//     }
//     return num;
// }

// function removeChar(str){
//     finalString = str.substr(1,str.length-2);
//     return finalString;
    
// };

// function positiveSum(arr) {
//     let cnt =0;
//     for (let i = 0; i < array.length; i++) {
//         if(arr[i]>0){
//             cnt+=arr[i];
//         }
//     }
//     return cnt;
// }

// function repeatStr (n, s) {
//     let finalString = '';
//     for(let i = 0;i<n;i++){
//         finalString+=s;
//     }
//     return finalString;
// }

function countSheeps(arrayOfSheep) {
    let cnt = 0;
    for(let i =0;i<arrayOfSheep.length;i++){
        if(arrayOfSheep[i]===true){
            cnt+=1;
        }
    }
    return cnt;

}