/* 
    Write an arrow function where it will do the following:
        a) Square each array element
        b) Calculate the sum of the squared elements
        c) Return the average of the sum of the squared elements 
*/

// Array
const numbers = [5, 7, 4, 10, 22, 30, 25, 27, 35, 15];
let sum = 0;
let average = 0;
// Array Function
const arrayNumbers = numbers => {
    for (const number of numbers) {
        // Step - 1
        const numberSqr = Math.pow(number, 2);
        // Step - 2
        sum = sum + numberSqr;
        // Step - 3
        average = sum / numbers.length;
    }
    return average;
}

console.log(arrayNumbers(numbers));