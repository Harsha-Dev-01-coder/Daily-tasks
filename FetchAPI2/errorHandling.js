async function getPosts() {
    try {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/invalid-url"      
    );

        const posts = await response.json();

        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}

getPosts();