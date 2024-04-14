function power(base, exponent) {
    let result = 1;
    
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    
    return result;
}

let base = 2;
let exponent = 3;
console.log(`The power of ${base} raised to ${exponent} is: ${power(base, exponent)}`);
