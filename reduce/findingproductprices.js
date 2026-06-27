const expenses = [500, 1200, 800, 300];

const total = expenses.reduce((sum, num) => {

    return sum + num;

}, 0);

console.log(total);