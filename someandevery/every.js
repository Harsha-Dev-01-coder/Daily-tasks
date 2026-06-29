const ages = [18, 20, 25, 30];

const adults = ages.every((adult) => {

    return adult >= 18;

});

console.log(adults);