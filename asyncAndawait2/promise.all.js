const html = Promise.resolve("HTML");
const css = Promise.resolve("CSS");
const js = Promise.resolve("JavaScript");

Promise.all([html, css, js]) 
    .then((values) => {
        console.log(values);
    });