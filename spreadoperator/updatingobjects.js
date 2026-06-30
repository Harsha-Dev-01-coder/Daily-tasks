const user = {

    username: "champ",
    premium: false

};

const updateUser = {
    ...user,
    premium: true
};

console.log(updateUser);