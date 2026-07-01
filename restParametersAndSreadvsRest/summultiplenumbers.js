function totalScores(...scores) {

    let total = 0;

    scores.forEach((score) => {
        total += score;
    });

    return total;

}

console.log(totalScores(50, 80, 100, 70));