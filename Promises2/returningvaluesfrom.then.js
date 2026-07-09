Promise.resolve(50)
    .then((value) => {
        return value - 20;
    })
    .then((value) => {
        return value * 3;
    })
    .then((result) => {
        console.log(result);
    });