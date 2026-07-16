const p1 = document.createElement("p");
p1.textContent = "Hello Everyone";

const h1 = document.createElement("h1");
h1.textContent = "Inserted";

const p2 = document.createElement("p");
p2.textContent = "Hope you are well"

document.body.appendChild(h1);
document.body.insertBefore(p1, h1);
document.body.appendChild(p2);
