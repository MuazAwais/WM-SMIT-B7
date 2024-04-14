let array = [5, 3, 8, 2, 9, 1, 7];
let target = 9;
let found = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
        found = true;
        console.log(`Target ${target} found at index ${i}.`);
        break; 
    }
}

if (!found) {
    console.log(`Target ${target} not found in the array.`);
}