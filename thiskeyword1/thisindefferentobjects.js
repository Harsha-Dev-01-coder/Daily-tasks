const car1 = {
    Brand : "BMW M4",

    showBrand() {
        console.log(this.Brand)
    }
};

const car2 = {
    Brand : "Supra",

    showBrand() {
        console.log(this.Brand)
    }
};

car1.showBrand();
car2.showBrand();