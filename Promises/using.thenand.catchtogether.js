const exam = new Promise((pass, fail) => {

    const Passed = true;

    if(Passed) {
        pass("Exam passed");
    } else {
        fail("Exam failed");
    }
});

exam
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });