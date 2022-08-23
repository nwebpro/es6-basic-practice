const max = Math.max(12, 85, 99);
// console.log(max);

const numbers = [12, 85, 99];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [22, 33, ...numbers, 111, 121, 128];
console.log(numbers3);




