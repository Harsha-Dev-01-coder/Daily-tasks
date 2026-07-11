function getGame() {
    return Promise.resolve("GTA 6");
}

async function run() {
    const game = await getGame();

    console.log(game);
}

run();