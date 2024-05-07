
function fib(upTo){
    if(upTo === 0){ return [0]; }
    if(upTo === 1){ return [0, 1]; }
    function fibonacci(arr, i){
        if(arr.length-1 == upTo){ return arr; }
        let sum = arr[i-1] + arr[i-2];
        arr.push(sum);
        return fibonacci(arr, ++i)
    }
    return fibonacci([0, 1], 2);
}