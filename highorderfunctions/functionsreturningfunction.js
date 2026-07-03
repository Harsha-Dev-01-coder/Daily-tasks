function createMultiplier(num) {
    return function (value) {
        return value * num;
    };
}

const double = createMultiplier(2);

console.log(double("5"));