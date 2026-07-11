const paymentPromise = new Promise((resolve, reject) => {
    reject("Payment Failed");
});

paymentPromise.catch((error) => {

    console.log(error);
});