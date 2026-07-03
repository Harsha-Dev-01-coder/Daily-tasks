function calculator(a, b, multiply) {
    multiply(a, b);
}

function multiply(x, y) {
    console.log(x * y);
};

calculator(5, 6, multiply);