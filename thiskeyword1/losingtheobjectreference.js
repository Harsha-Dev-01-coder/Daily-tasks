const person = {
    name: "LUZY",

    greet() {
        console.log(this.name);
    }
    
};

const sayHello = person.greet;

sayHello();

