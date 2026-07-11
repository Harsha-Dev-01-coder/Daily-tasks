async function payment() {
    try {
        const result = await Promise.resolve("Payment Failed");

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

payment();