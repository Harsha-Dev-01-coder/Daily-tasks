const city = "Hyderabad"; // global context

function showCity() { // function context
    console.log(city);
}

showCity();