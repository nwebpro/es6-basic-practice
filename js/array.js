// Function Declaration
function add(first, second){
    const total = first + second;
    return total;
}

// Function Expression Declaration
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

// Function Expression with Anonymous Function Declaration
const add2 = function (first, second){
    const total = first + second;
    return total;
}

function add4(first, second){
    return first + second;
}

const add5 = function (first, second){
    return first + second;
}

// Array Function 
const add6 = (first, second) => first + second;

const result = add(10, 20);
console.log(result);

