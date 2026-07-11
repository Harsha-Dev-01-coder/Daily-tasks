function createPlayerHandler(player) {
    return function () {
        console.log(`Player: ${player}`);
    };
}

const handleClick = createPlayerHandler("Champ");

handleClick();