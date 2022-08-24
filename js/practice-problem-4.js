/* 
    Write an arrow function where it will do the following:
        a) It will take two array inputs
        b) Combine the two arrays and assign them in a new array
        c) Find the maximum number from the new array and return the result 
*/

// Step - 1
const array1 = [10, 20, 30, 40, 50, 55, 110];
const array2 = [60, 66, 70, 35, 25, 45];
// Empty Array
let combine = [];

// Array Function
const combineArray = (array1, array2) => {
    // Step - 2
    const combineArr = [...array1, ...array2];
    combine.push(...combineArr);
    // Step - 3
    const maxNumber = Math.max(...combine);
    return maxNumber;
}

console.log(combineArray(array1, array2));