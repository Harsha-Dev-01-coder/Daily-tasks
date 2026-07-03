function calculateNumbers(a, b, callback) {
    callback(a, b);
}

function multiply(a, b) {
    console.log(a * b);
}

calculateNumbers(5, 10, multiply);