function countDigits(number) {
    let count = 0;
    
    if (number === 0) {
        return 1;
    }

    for (; number !== 0; number = Math.floor(number / 10)) {
        count++;
    }

    return count;
}

const number = 12345;
console.log(`The number of digits in ${number} is: ${countDigits(number)}`);
