function fibonacciNumber(num) {
    if(num === 0){
        return 0;
    }
    else if(num === 1 || num === 2){
        return 1;
    }
    else {
        const res = fibonacciNumber(num - 2) + fibonacciNumber(num - 1);
        return res;
    }

}

function fibonacciSeries(num) {
    for (let i = 0; i < num; i++) { 
        console.log(fibonacciNumber(i)); 
    }
}

console.log("fibonacci-series for 10 numbers");
console.log(fibonacciSeries(10));