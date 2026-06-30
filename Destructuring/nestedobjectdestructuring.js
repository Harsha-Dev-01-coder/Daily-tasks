const laptop = {

    brand: "Apple",

    specs: {
        ram: "16GB",
        storage: "512GB"
    }

};

const {
    specs: { ram, storage }
} = laptop;

console.log(ram);
console.log(storage);