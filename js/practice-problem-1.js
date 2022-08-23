// 1. Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
const multiply = (x, y, z) => x * y * z;
const result = multiply(10, 5, 7);
console.log(result);

// 2. Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.
const multiLine = `
    I am a web developer. 
    I love to code. 
    I love to eat biryani.
`;
console.log(multiLine);

// 3. Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const add = (a, b = 10) => a + b;
const result3 = add(10);
console.log(result3);