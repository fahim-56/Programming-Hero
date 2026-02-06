// function sumOf(x, y) {
//     const result = x + y;
//     return result;
// }

// const sum = sumOf(5, 6);
// console.log(sum);


function doAverage(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }

    return (sum / numbers.length)
}


numbs = [10, 20, 30, 40, 50];
// let result = doAverage(numbs)
// console.log(result);


function countZero(str) {
    let count = 0;
    for (const char of str) {
        if (char === '0') {
            count++;
        }
    }
    return count;
}

str = '001101001'
let result = countZero(str);
console.log(result);