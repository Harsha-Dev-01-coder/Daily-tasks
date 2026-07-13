const p1 = Promise.resolve("Start");
const p2 = Promise.reject("Server Error");
const p3 = Promise.resolve("End");

Promise.all([p1, p2, p3])
    .then(console.log)
    .catch(console.log);