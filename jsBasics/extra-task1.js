function sumArray(arr) {
    if (!Array.isArray(arr) || arr.length <= 2) {
        return 0;
    }

    let sum = 0;
    let min = Infinity;
    let max = -Infinity;

    for (let num of arr) {
        sum += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }

    return sum - min - max;
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([1, 1, 11, 2, 3]));
console.log(sumArray(null));
console.log(sumArray([5]));