// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

const isEven = (n) => {
    if (n % 1 !== 0) {
        return false;
    } else if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isEven(4));
console.log(isEven(3));
console.log(isEven(3.5));
console.log(isEven(-8));