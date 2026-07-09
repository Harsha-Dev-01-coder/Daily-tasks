Promise.resolve(5)
    .then((value) => {
        return Promise.resolve(value + 10);
    })
    .then((result) => {
        console.log(result);
    });