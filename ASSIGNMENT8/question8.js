let numbers = [10, 5, 20, 15, 25];

let largest = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]; 
    }
}

console.log("The largest number in the array is:", largest);