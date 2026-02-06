const weight = 90;
const height = 1.8;


const BMI = (weight) / height ** 2;
console.log(BMI);

if (BMI < 18.5) {
    console.log("Underweight");
}
else if (BMI >= 18.5 && BMI < 24.9) {
    console.log("Normal weight");
}
else if (BMI >= 25 && BMI < 29.9) {
    console.log("Overweight");
}
else {
    console.log("Obesity");
}