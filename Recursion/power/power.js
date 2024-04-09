function power(base, e) {
    if(e === 0){
        return 1;
    }
    return base * power(base, e-1);
}

console.log("2^3 = ", power(2, 3));
console.log("2^1 = ", power(2, 1));
console.log("2^0 = ", power(2, 0));