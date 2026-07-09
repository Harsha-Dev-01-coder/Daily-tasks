Promise.resolve("Done")
    .then((messege) => {
        console.log(messege);
    })
    .finally(() => {
        console.log("Loading Complete");
    });