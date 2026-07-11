const createTax = tax => price => price + tax;

const gst = createTax(500);

console.log(gst(5000));