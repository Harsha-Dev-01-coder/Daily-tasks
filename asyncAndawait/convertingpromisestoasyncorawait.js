async function show() {
    const value = await Promise.resolve("React");

    console.log(value);
}

show();