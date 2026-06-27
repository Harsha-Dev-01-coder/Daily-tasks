const levels = [25, 70, 95, 60, 80];

const largest = levels.reduce((max, level) => {

    if(level > max){
        return level;
    }

    return max
}, levels[0]);

console.log(largest);