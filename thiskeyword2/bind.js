function showStudent() {
    console.log(this.name);
}

const student = {
    name: "Rahul"
};

const fn = showStudent.bind(student);

fn();