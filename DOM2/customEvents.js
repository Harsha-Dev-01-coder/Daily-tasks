const event = new Event("welcome");

document.addEventListener("welcome", () => {
    console.log("Login Success");
});

document.dispatchEvent(event);