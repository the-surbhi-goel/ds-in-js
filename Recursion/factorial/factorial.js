function factorial(num){
    if(num <= 1){
        return 1;
    }
    return num * factorial(num-1);
}

console.log("factorial of 5 is ", factorial(5));
console.log("factorial of 3 is ", factorial(3));
console.log("factorial of 1 is ", factorial(1));