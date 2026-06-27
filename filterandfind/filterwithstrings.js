const games = ["Free Fire", "BGMI", "Valorant"];

const result = games.filter((game) => {
    return game.length > 5;
});

console.log(result);