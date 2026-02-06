const Array = [19, 28, 36, 71, 8, 23];
let newArray = [];
for (num of Array) {
    if (num % 2 == 0) {
        newArray.push(num);
    }
}
// console.log(newArray);

const names = ["Tik", "Tok", "Toe"];
let newNames = [];
let temp = '';
for (name of names) {
    temp += name;
}

newNames.push(temp);
// console.log(newNames);

const sentence = "A cat is waiting for you."

const newSentence = sentence.split(' ');
newSentence.reverse();
console.log(newSentence);
