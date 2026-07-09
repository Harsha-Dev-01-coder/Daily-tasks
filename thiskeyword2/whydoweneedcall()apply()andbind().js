const student = {
    name: "Rahul",

    show() {
        console.log(this.name);
    }
};

const fn = student.show();

fn();