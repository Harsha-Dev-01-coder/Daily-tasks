const products = [

    { id: 1, name: "keyboard"},
    { id: 2, name: "mouse"},
    { id: 3, name: "monitor"},

];

const product = products.find((product) => {

    return product.id === 2;

});

console.log(product);