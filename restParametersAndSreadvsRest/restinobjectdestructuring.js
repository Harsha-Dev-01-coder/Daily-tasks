const laptop = {

    brand: "Apple",
    ram: "16GB",
    storage: "512GB",
    chip: "M4"

};

const { brand, ...othersDetails } = laptop;

console.log(brand);
console.log(othersDetails);