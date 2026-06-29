const products = [
    {
        name: "Keyboard",
        price: 2500
    },

    {
        name: "Mouse",
        price: 1200
    },

    {
        name: "Monitor",
        price: 15000
    }
];

products.sort((a, b) => {

    return a.price - b.price;

});

console.log(products);