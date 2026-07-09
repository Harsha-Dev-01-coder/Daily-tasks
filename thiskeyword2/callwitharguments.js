function showLaptop(price) {
    console.log(`${this.brand} costs ₹${price}`);
}

const laptop = {
    brand: "Apple"
};

showLaptop.call(laptop, 119000);