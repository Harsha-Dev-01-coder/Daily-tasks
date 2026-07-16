const heading1 = document.createElement("h1");
const heading2 = document.createElement("h2");
const button = document.createElement("button");

heading1.textContent= "Welcome";
heading2.textContent= "Hello JavaScript";
button.textContent= "click me";

button.addEventListener("click", () => {
    console.log("Button clicked");
});