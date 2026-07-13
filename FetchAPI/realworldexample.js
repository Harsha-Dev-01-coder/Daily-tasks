async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    console.log(posts.length);
    console.log(posts[0]);
    console.log(posts[0].title);
    console.log(posts[0].body);
}

getPosts();