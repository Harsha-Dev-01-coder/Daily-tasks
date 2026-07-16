const paragraph1 = document.createElement("p1");
const paragraph2 = document.createElement("p2");

paragraph1.textContent = "Hi Everyone";
paragraph2.textContent = "Are you Ready";

document.body.prepend(paragraph1);
document.body.prepend(paragraph2);