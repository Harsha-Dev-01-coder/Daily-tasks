function createGame() {
    const game = "Free Fire";

    return function () {
        console.log(game);
    };
}

const showGame = createGame();

showGame();