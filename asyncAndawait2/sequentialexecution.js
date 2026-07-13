function getHTML() {
    return Promise.resolve("HTML");
}

function getCSS() {
    return Promise.resolve("CSS");
}

async function loadData() {
    const HTML = await getHTML();

    console.log(HTML);

    const CSS = await getCSS();

    console.log(CSS);
}

loadData();