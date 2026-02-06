const school = {
    name: "Greenwood High",
    location: "Springfield",
    classes: {
        grade10: {
            teacher: "Ms. Adams",
        }
    }
};

console.log("School Name:", school.name);
console.log("Grade 10 Teacher:", school.classes.grade10.teacher);

console.log("keys in school object:",Object.keys(school));
