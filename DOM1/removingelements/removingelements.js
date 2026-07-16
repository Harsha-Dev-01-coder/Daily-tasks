const p1 = document.createElement("p");
p1.textContent = "Hope u all are well";
document.body.append(p1);

setTimeout(() => {
    const p = document.querySelector("p");
    p.remove();
}, 3000);