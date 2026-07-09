Promise.resolve("start")
    .then(() => {
        throw new Error("Login Failed");
    })
    .then((error) => {
        console.log(error.message);
    });