function sayHi(name) {
    console.log(`Hi ${name}`);
}

function welcomeUser(callback) {
    callback("LUZY");
}

welcomeUser(sayHi);