const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (const num of numbers) {
    console.log(num);
}

let count = 0;
while (count < numbers.length) {
    console.log(numbers[count]);
    count++;
}

let index = 0;
do {
    console.log(numbers[index]);
    index++;
} while (index < numbers.length);