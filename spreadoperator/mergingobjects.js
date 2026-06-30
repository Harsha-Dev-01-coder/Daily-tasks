const personal = {
    name: "Champ"
};

const skills = {
    language: "JavaScript"
};

const person = {
    ...personal,
    ...skills
};

console.log(person);