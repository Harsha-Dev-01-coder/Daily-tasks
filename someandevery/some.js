const levels = [15, 25, 35, 45, 55];

const hasHigherLevel = levels.some((level) => {

    return level > 50;

});

console.log(hasHigherLevel);