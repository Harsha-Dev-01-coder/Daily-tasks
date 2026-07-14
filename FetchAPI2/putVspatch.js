async function user() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            title: "Updated title",
            body: "This post was updated",
            userId: 1
        })
    });

    const data = await response.json();
    console.log(data);
}

user();