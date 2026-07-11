function createAdder(num) {
    return function (value) {
        return value + num;
    };
}

const addFive = createAdder(5);

console.log(addFive(10));