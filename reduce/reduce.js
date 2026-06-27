const scores = [50, 70, 90, 100];

const score = scores.reduce((total, num) => {

    return total + num;

}, 0);

console.log(score);