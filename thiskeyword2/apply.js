function showPhone(price, color) {
    console.log(`${this.brand} ₹${price} ${color}`);
}

const phone = {
    brand: "Apple"
};

showPhone.apply(phone, [179000, "Cosmic"]);