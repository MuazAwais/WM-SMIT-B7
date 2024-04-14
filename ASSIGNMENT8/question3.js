let nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let elementToDelete = 3;

nums = nums.filter(item => item !== elementToDelete);

console.log(nums);