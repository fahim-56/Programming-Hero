const person = {
    firstName: "Fahim",
    lastName: "Chowdhury ",
    age: 24,
    eyeColor: "brown",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};  

console.log(person.fullName());
console.log(person["age"]);
console.log(person.eyeColor);
person.nationality = "Bangladeshi";
console.log(person);
console.log(typeof person);
