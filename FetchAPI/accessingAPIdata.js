fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((user) => {

        console.log(user[0]);

        console.log(user[0].name);
        console.log(user[0].username);
        console.log(user[0].email);
    });