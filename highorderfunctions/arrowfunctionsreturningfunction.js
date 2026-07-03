const createAdder = num => value => value + num;

const addTen = createAdder(10);

console.log(addTen(15));