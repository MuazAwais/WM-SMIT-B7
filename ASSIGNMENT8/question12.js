let array = [1, 3, 5, 7, 9, 11, 13, 15, 17];
let target = 9;
let found = false;
let low = 0;
let high = array.length - 1;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
        found = true;
        console.log(`Target ${target} found at index ${mid}.`);
        break; 
    } else if (array[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

if (!found) {
    console.log(`Target ${target} not found in the array.`);
}