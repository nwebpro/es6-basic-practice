function add(first, second = 0){
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);

function fullName(first, last = 'Miah'){
    const name = first + ' ' + last;
    return name;
}

const output = fullName('Rasel');
console.log(output);