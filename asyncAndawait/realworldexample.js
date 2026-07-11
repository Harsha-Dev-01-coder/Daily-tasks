function fetchStudent() {
    return Promise.resolve({
        name: "Champ",
        course: "JavaScript"
    });
}

async function showStudent() {
    const student = await fetchStudent();

    console.log(student.name);
    console.log(student.course);
}

showStudent();