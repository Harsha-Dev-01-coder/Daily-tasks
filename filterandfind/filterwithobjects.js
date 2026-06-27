const players = [

    { name: "Harsha", level: 90 },
    { name: "Manju", level: 49 },
    { name: "Champ", level: 89 },

];

const proPlayers = players.filter((players) =>{

    return players.level > 50;

});

console.log(proPlayers);