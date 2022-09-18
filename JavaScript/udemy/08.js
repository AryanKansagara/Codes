


function fibonacciGenerator(n){
    let arr = [];
    if(n===1){
        arr[n-1]=0;
        return arr;
    }
    let idx = 0;
    arr[idx] = 0;
    arr[idx+1]=1;
    for(idx=2;idx<n;idx++){
        arr[idx] = arr[idx-1] + arr[idx-2];
    }
    return arr;

}

console.log(fibonacciGenerator(1));