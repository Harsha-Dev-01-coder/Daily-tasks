const p1 = Promise.resolve("Success");

const p2 = Promise.reject("Failed");

Promise.allSettled([p1, p2])
    .then(console.log);