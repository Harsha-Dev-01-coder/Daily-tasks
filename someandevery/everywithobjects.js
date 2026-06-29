const products = [

    {
        name: "Mouse",
        InStock: "True"
    },
    {
        name: "Keyboard",
        InStock: "True"
    },
    {
        name: "HeadPhones",
        InStock: "True"
    },
    {
        name: "Monitor",
        InStock: "True"
    },

];

const available = products.every((product) => {

    return product.InStock;

});

console.log(available);