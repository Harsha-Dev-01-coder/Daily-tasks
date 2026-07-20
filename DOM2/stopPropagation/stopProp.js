const child = document.getElementById("child");

child.addEventListener("click", (event) => {
    event.stopPropagation();

    console.log("Button");
});