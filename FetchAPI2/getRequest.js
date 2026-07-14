async function users() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET"
    });
    const data = await response.json();
    console.log(data);
    
}


users();