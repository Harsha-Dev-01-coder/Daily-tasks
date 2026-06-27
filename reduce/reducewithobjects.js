const players = [

    {
        name: "Harsha",
        score: 100
    },

    {
        name: "Raj",
        score: 200
    },

    {
        name: "Sai",
        score: 150
    }

];

const totalScore = players.reduce((sum, num) => {

    return sum + num.score;

}, 0);

console.log('Total Team Score:',totalScore);