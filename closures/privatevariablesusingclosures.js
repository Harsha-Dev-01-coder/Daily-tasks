function scoreCounter() {
    let score = 0;

    return function () {
        score += 10;
        console.log(score);
    };
}

const increament = scoreCounter();

increament();
increament();
increament();