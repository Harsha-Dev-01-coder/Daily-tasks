async function user() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Javascript",
            completed: true
        })
    })

    const data = await response.json();
    console.log(data);
}

user();