const p1 = Promise.reject("A");

const p2 = Promise.reject("B");

const p3 = Promise.resolve("C");

Promise.any([p1, p2, p3])
    .then(console.log);