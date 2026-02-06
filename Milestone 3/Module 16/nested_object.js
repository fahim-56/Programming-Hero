const college = {
    name: "ABC College",
    location: "New York",
    departments: {
        science: {
            head: "Dr. Smith",
            courses: ["Physics", "Chemistry", "Biology"]
        },
        arts: {
            head: "Prof. Johnson",
            courses: ["History", "Literature", "Philosophy"]
        }
    }
}

console.log("College Name:", college.name);
console.log("Science Department Head:", college.departments.science.head);
console.log("Arts Courses:", college.departments.arts.courses);
college.departments.commerce = {
    head: "Dr. Brown",
    courses: ["Accounting", "Economics", "Business Studies"]
};
console.log("Updated College Object:", college);
console.log("Type of college:", typeof college);