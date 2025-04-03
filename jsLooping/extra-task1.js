// Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

// For example, given the following array:
// [34.5, 56.2, 11, 13]

// should return
// [35, 55, 10, 15]

const array = [34.5, 56.2, 11, 13];
const result = [];

for (let i = 0; i < array.length; i++) {
    let rounded = Math.round(array[i] / 5) * 5;
    result.push(rounded);
}

console.log(result);