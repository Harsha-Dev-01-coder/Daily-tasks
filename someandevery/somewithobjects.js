const players = [

    {
        name: "Harsha",
        vip: "True"
    },
    {
        name: "Champ",
        vip: "True"
    },
    {
        name: "Manju",
        vip: "False"
    },
    {
        name: "Mani",
        vip: "False"
    },

];

const hasVipMembership = players.some((player) => {

    return player.vip;

});

console.log(hasVipMembership);