function outer() {
    const game = "GTA 6";

    function inner() {
        console.log(game);
    }

    inner();
}

outer();