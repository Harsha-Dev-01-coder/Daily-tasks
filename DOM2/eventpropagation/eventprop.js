const body = document.querySelector("body");
const section = document.querySelector("section");
const div = document.querySelector("div");
const button = document.querySelector("button");

body.addEventListener("click", () => console.log("Body Bubble"));
section.addEventListener("click", () => console.log("Section Bubble"));
div.addEventListener("click", () => console.log("Div Bubble"));
button.addEventListener("click", () => console.log("Button Bubble"));