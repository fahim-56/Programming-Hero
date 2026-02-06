// 
// TURNERY Operator
// (condition) ? IfTrue : IfFalse

let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

age = 16;
canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

// Example with nested ternary operator
let score = 85;
let grade = (score >= 80) ? "A+" :
    (c = score >= 70) ? "A" :
        (score >= 60) ? "A-" :
            (score >= 50) ? "B" :
                (score >= 40) ? "C" :
                    (score >= 33) ? "D" : "F";

console.log("Grade:", grade);