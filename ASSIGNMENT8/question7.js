function sumOfDigits(number) {
    let sum = 0;
    
    for (let n = number; n !== 0; n = Math.floor(n / 10)) {
        sum += n % 10;
    }

    return sum;
}

const number = 12345;
console.log(`The sum of digits in ${number} is: ${sumOfDigits(number)}`);