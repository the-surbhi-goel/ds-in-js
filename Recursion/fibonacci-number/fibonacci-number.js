function fibonacciNumber(num) {
    if(num === 0){
        return 0;
    }
    else if(num === 1){
        return 1;
    }
    else if(num === 2){
        return 1;
    }
    else {
        const res = fibonacciNumber(num - 2) + fibonacciNumber(num - 1);
        return res;
    }

}
const num = 10;
console.log("fibonacci number at position ", num);
console.log(fibonacciNumber(num-1));