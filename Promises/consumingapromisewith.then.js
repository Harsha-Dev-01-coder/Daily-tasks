const gamePromise = new Promise((resolve) => {
    resolve("Game Installed");
});

gamePromise.then((result) => {

    console.log(result);
});