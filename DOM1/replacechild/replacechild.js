const h1 = document.createElement("h1");
const h2 = document.createElement("h1");

h1.textContent = "Hello";
h2.textContent = "Welcome";

document.body.appendChild(h1);

setTimeout(() => {
  document.body.replaceChild(h2, h1);
}, 2000);
