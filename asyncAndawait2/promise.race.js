const p1 = new Promise((resolve) =>
    setTimeout(() => resolve("A"), 4000)
);

const p2 = new Promise((resolve) =>
    setTimeout(() => resolve("B"), 2000)
);

Promise.race([p1, p2])
    .then(console.log);