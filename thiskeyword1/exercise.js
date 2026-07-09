const student = {
    name: "Champ",
    course: "Frontend",
    marks: "100",

    showDetails() {
        console.log(this.name);
        console.log(this.course);
        console.log(this.marks);
    }
};

student.showDetails();