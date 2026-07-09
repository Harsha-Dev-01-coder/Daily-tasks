const scorePromise = new Promise((resolve) => {
    resolve(100);
});

scorePromise
    .then((number) => {
        console.log(number);

        return number * 2;
    })
    .then((result) => {
        console.log(result);
    });