// Array Function
const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const name = getFullName('Ab', 'Naeem');
const result = multiply(5, 10);
console.log(name);
console.log(result);

// No parameter array function declaration
const getPie = () => 3.14;

// Single parameter
const doubleIt = (num) => num * 2;

// Single parameter simple version
const fiveTimes = num => num * 5;

// Multiline array function (if you want to return something, use the return)
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}