parent.addEventListener(
    "click",
    () => {
        console.log("Parent");
    },
    true
);

child.addEventListener(
    "click",
    () => {
        console.log("Button");
    },
    true
);