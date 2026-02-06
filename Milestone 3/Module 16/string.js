// const country = "Bangladesh";
// const city = 'Dhaka';
// const greeting = `Welcome to ${city}, ${country}!`;

// console.log(greeting); 

// const title = new String("JavaScript String Methods");
// console.log(title);


// const capital = "Dhaka is the capital of Bangladesh.";
// console.log(capital.length);
// console.log(capital[10]);
// console.log(capital);
// capital[8]="K";
// console.log(capital);// Immutable


const name1 = "Fahim";
const name2 = "fahim";

console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
console.log(name1.toUpperCase()=== name2.toUpperCase());

const country1 = "  Bangladesh  ";
const country2 = "Bangladesh";
console.log(country1 === country2);
console.log(country1.trim() === country2.trim());
console.log(country1.trimStart() === country2.trim());
console.log(country1.trimEnd() === country2.trim());

// slice, substring, substr
const language = "JavaScript Language";
console.log(language.slice(4,10));
console.log(language.substring(11,19));
console.log(language.substr(4,19));

//split 
const sentence = "JavaScript is the most popular language.";
console.log(sentence.split());
console.log(sentence.split(""));
console.log(sentence.split(" "));

const friends = "Fahim, Rakib, Asif, Rafiq";
console.log(friends.split(", "));

const nameArray = ["Fahim", "Rakib", "Asif", "Rafiq"];
console.log(nameArray.join());
console.log(nameArray.join(" "));
console.log(nameArray.join("-"));

// includes, indexOf, startsWith, endsWith
const paragraph = "JavaScript is a versatile language. I love JavaScript because JavaScript is fun.";
console.log(paragraph.includes("versatile"));
console.log(paragraph.indexOf("JavaScript"));
console.log(paragraph.lastIndexOf("JavaScript"));
console.log(paragraph.startsWith("JavaScript"));
console.log(paragraph.endsWith("fun."));

//concat 
const part1 = "JavaScript is";;
const part2 = "a versatile language.";
const fullSentence = part1.concat(part2);
const fullSentence2 = part1.concat(" ", part2);
console.log(fullSentence);
console.log(fullSentence2);